
import React, { useState } from 'react';
import Header from './components/Header';
import BlogPostCard from './components/BlogPostCard';
import PostDetail from './components/PostDetail';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import About from './components/About';
import { BLOG_POSTS, PERSONAL_PROFILE } from './constants';
import { BlogPost } from './types';

type PageType = 'home' | 'about' | 'blog' | 'achievements' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const getSocialLink = (platform: string, value: string) => {
    if (platform === 'phone') return `tel:${value}`;
    return value;
  };

  const renderContent = () => {
    if (selectedPost) {
      return <PostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    switch (currentPage) {
      case 'about':
        return <About />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return (
          <main className="max-w-5xl mx-auto px-4 py-16">
            <header className="mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-700">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog của tôi</h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Chia sẻ kinh nghiệm thực chiến về Java, JavaScript và hạ tầng mạng. Mong nhận được sự ủng hộ từ các bạn.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {BLOG_POSTS.map(post => (
                <BlogPostCard key={post.id} post={post} onClick={handlePostClick} />
              ))}
            </div>
          </main>
        );
      case 'home':
      default:
        return (
          <main className="max-w-5xl mx-auto px-4 py-16">
            <section className="mb-24 flex flex-col md:flex-row items-center gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Chào mừng bạn ghé thăm</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                  Xin chào, mình là <span className="text-red-600">{PERSONAL_PROFILE.name}</span>
                </h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-xl">
                  {PERSONAL_PROFILE.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button 
                    onClick={() => handleNavigate('about')}
                    className="px-8 py-4 bg-red-600 text-white text-sm font-bold rounded-full hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-red-200"
                  >
                    Tìm hiểu thêm
                  </button>
                  <button 
                    onClick={() => handleNavigate('contact')}
                    className="px-8 py-4 border border-gray-200 text-sm font-bold rounded-full hover:border-red-600 hover:text-red-600 transition-all transform hover:-translate-y-1"
                  >
                    Kết nối ngay
                  </button>
                </div>
              </div>
              <div className="w-64 h-64 md:w-80 md:h-80 relative group">
                <div className="absolute inset-0 bg-red-50 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500 border border-red-100"></div>
                <img 
                  src={PERSONAL_PROFILE.avatar} 
                  alt={PERSONAL_PROFILE.name} 
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:-rotate-3"
                />
              </div>
            </section>

            <section className="mb-24">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Bài viết tiêu biểu</h2>
                  <p className="text-gray-500">Những chia sẻ tâm đắc nhất về kỹ thuật mạng và web.</p>
                </div>
                <button 
                  onClick={() => handleNavigate('blog')}
                  className="text-sm font-bold text-red-600 hover:text-red-800 transition-colors"
                >
                  Xem tất cả →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BLOG_POSTS.slice(0, 3).map(post => (
                  <BlogPostCard key={post.id} post={post} onClick={handlePostClick} />
                ))}
              </div>
            </section>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      {renderContent()}
      
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">DungNHP.</div>
          <div className="flex justify-center gap-8 mb-10">
            {Object.entries(PERSONAL_PROFILE.socials).map(([platform, url]) => (
              <a 
                key={platform}
                href={getSocialLink(platform, url || '')}
                target={platform !== 'phone' ? "_blank" : undefined}
                rel={platform !== 'phone' ? "noreferrer" : undefined}
                className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors capitalize"
              >
                {platform === 'phone' ? 'Điện thoại' : platform}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} DungNHP. Thiết kế bởi {PERSONAL_PROFILE.name} với React & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
