
import React, { useState } from 'react';
import { PERSONAL_PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getSocialLink = (platform: string, value: string) => {
    if (platform === 'phone') return `tel:${value}`;
    return value; // value hiện tại đã là URL đầy đủ
  };

  const getPlatformName = (platform: string) => {
    switch(platform) {
      case 'phone': return 'Số điện thoại';
      case 'github': return 'Github';
      case 'facebook': return 'Facebook';
      default: return platform;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Contact Info */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Liên hệ với mình</h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            Bạn có thắc mắc về lập trình mạng, hay muốn cùng mình trao đổi về các kiến thức học tập trên trường? Đừng ngần ngại gửi tin nhắn cho mình nhé.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email</h4>
                <a 
                  href="mailto:phuongdungnguyenhoang2004@gmail.com" 
                  className="text-gray-500 hover:text-red-600 transition-colors"
                >
                  phuongdungnguyenhoang2004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Mạng xã hội & Kết nối</h4>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2">
                  {Object.entries(PERSONAL_PROFILE.socials).map(([platform, url]) => (
                    <a 
                      key={platform} 
                      href={getSocialLink(platform, url || '')} 
                      className="text-gray-400 hover:text-red-600 transition-colors text-sm font-medium underline decoration-transparent hover:decoration-red-200 underline-offset-4"
                      target={platform !== 'phone' ? "_blank" : undefined}
                      rel={platform !== 'phone' ? "noreferrer" : undefined}
                    >
                      {getPlatformName(platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-red-200/10">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Đã gửi thành công!</h3>
              <p className="text-gray-500 mb-8">Cảm ơn bạn đã nhắn tin. Mình sẽ phản hồi sớm nhất có thể để cùng trao đổi.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-sm font-bold text-red-600"
              >
                Gửi tin nhắn khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Họ và tên</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all" placeholder="Tên của bạn" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input required type="email" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Tiêu đề</label>
                <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all" placeholder="Trao đổi học tập về..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Lời nhắn</label>
                <textarea required rows={5} className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-600 focus:ring-4 focus:ring-red-50 outline-none transition-all resize-none" placeholder="Nhập nội dung bạn muốn trao đổi ở đây..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all transform active:scale-[0.98] shadow-lg shadow-red-200">
                Gửi tin nhắn
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
