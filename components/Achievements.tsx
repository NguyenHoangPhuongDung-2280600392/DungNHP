
import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Achievement } from '../types';

const Achievements: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const closeModal = () => setSelectedAchievement(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-20 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Thành tựu & Chứng chỉ</h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
          Hành trình học tập và nỗ lực tại HUTECH, tập trung vào kiến thức mạng và lập trình ứng dụng hiện đại. Nhấp vào mỗi mục để xem ảnh minh chứng.
        </p>
      </header>

      <div className="space-y-6">
        {ACHIEVEMENTS.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedAchievement(item)}
            className="group flex gap-6 p-8 bg-white border border-gray-100 rounded-2xl hover:border-red-600/30 hover:shadow-xl hover:shadow-red-50 transition-all duration-300 cursor-pointer relative overflow-hidden"
          >
            {/* Hover overlay hint */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-1 rounded">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Xem minh chứng
            </div>

            <div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-red-100 transition-all duration-300 shadow-sm">
              {item.icon}
            </div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <span className="inline-block w-fit text-[10px] font-bold text-red-600 uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded border border-red-100">
                  Năm {item.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 pt-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-sm italic font-medium">
          "The beautiful thing about learning is that no one can take it away from you."
        </p>
      </div>

      {/* Modal for Proof Image */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
              <div>
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1 block">Minh chứng thành tựu</span>
                <h2 className="text-lg font-bold text-gray-900 leading-tight">{selectedAchievement.title}</h2>
              </div>
              <button 
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 bg-gray-100 min-h-[300px] flex items-center justify-center">
              {selectedAchievement.proofImageUrl ? (
                <img 
                  src={selectedAchievement.proofImageUrl} 
                  alt={`Minh chứng cho ${selectedAchievement.title}`} 
                  className="max-h-[70vh] w-auto rounded-lg shadow-lg border border-gray-200"
                />
              ) : (
                <div className="text-center py-20 text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p>Đang cập nhật hình ảnh minh chứng...</p>
                </div>
              )}
            </div>
            
            <div className="p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-sm text-gray-500 max-w-2xl">
                {selectedAchievement.description}
              </p>
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-red-600 text-white text-sm font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-100"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievements;
