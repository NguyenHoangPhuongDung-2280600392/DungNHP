
import React from 'react';

type PageType = 'home' | 'about' | 'blog' | 'achievements' | 'contact';

interface HeaderProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'blog', label: 'Bài viết' },
    { id: 'achievements', label: 'Thành tựu' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="text-xl font-bold tracking-tight cursor-pointer flex items-center gap-2"
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white text-xs shadow-lg shadow-red-200">D</div>
          <span>DungNHP<span className="text-gray-400">.</span></span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors ${currentPage === item.id ? 'text-red-600' : 'text-gray-500 hover:text-red-600'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <select 
            className="text-sm bg-transparent font-medium text-red-600 outline-none"
            value={currentPage}
            onChange={(e) => onNavigate(e.target.value as PageType)}
          >
            {navItems.map(item => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
