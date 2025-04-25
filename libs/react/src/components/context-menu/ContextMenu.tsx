import React, { useState, useEffect, useCallback, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { menuVariants, itemVariants } from './ContextMenuVariants';
import type { ContextMenuProps } from './Contextmenu.types';
import { ChevronRight } from 'lucide-react';

export const ContextMenu: React.FC<ContextMenuProps> = ({
  triggerText = 'Right-click here',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();

    // 클릭 위치
    let x = e.clientX;
    let y = e.clientY;

    // 메뉴 크기 확인 & 화면 경계 처리
    const menuWidth = menuRef.current?.offsetWidth || 0;
    const menuHeight = menuRef.current?.offsetHeight || 0;
    const maxX = window.innerWidth - menuWidth - 5;
    const maxY = window.innerHeight - menuHeight - 5;
    x = Math.min(x, maxX);
    y = Math.min(y, maxY);

    setPosition({ x, y });
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative">
      <div
        onContextMenu={handleContextMenu}
        className="flex items-center justify-center h-[150px] w-[300px] border border-dashed border-gray-300 rounded-md cursor-context-menu"
      >
        <span className="text-gray-600">{triggerText}</span>
      </div>

      <div
        className={twMerge(
          'absolute z-10 bg-white shadow-md rounded-lg p-1 transition-all duration-200 w-40',
          menuVariants({ isOpen })
        )}
        style={{ top: position.y, left: position.x }}
        role="menu"
        aria-orientation="vertical"
        onClick={(e) => e.stopPropagation()}
      >
        <button className={itemVariants()} role="menuitem">
          <span>Edit</span>
          <span className="text-brand-black text-xs">⌘ E</span>
        </button>
        <button className={itemVariants()} role="menuitem">
          <span>Duplicate</span>
          <span className="text-brand-black text-xs">⌘ D</span>
        </button>
        <button className={itemVariants({ isDanger: true })} role="menuitem">
          <span>Delete</span>
          <span className="text-red-500 text-xs">⌘ ⌫</span>
        </button>
        <div className="my-1 border-t border-brand-gray" role="separator" />
        <button className={itemVariants()} role="menuitem">
          <div className="flex items-center gap-2">
            <span>More</span>
            <ChevronRight className="w-4 h-4 text-gray-500" />
          </div>
        </button>
        {children}
      </div>
    </div>
  );
};

ContextMenu.displayName = 'ContextMenu';
