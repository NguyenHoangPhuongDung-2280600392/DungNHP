
import React from 'react';
import { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, onClick }) => {
  return (
    <div 
      className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-red-100/30 transition-all cursor-pointer flex flex-col h-full"
      onClick={() => onClick(post)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm text-red-600">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-gray-400 mb-2 font-medium flex items-center gap-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} đọc</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-3 leading-tight">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-3 mb-6">
          {post.summary}
        </p>
        <div className="mt-auto flex items-center text-xs font-semibold text-gray-900 group-hover:text-red-600 group-hover:gap-2 transition-all">
          XEM BÀI VIẾT 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
