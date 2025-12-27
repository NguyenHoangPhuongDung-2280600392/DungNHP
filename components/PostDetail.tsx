
import React from 'react';
import { BlogPost } from '../types';

interface PostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onBack }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại
      </button>

      <div className="mb-10 text-center">
        <span className="inline-block px-3 py-1 bg-red-50 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 text-red-600">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} đọc</span>
        </div>
      </div>

      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full aspect-video object-cover rounded-2xl mb-12 shadow-lg"
      />

      <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap prose-headings:text-gray-900 prose-a:text-red-600">
        {post.content}
      </article>

      <div className="mt-16 pt-8 border-t border-gray-100">
        <h4 className="font-bold text-gray-900 mb-4">Chia sẻ bài viết</h4>
        <div className="flex gap-4">
          {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
            <button key={platform} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-red-50 hover:text-red-600 transition-colors">
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
