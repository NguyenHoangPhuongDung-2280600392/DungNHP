
export type Category = 'Java' | 'JavaScript' | 'Networking' | 'General';

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: Category;
  author: string;
  readTime: string;
  imageUrl: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    phone?: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  icon: string;
  proofImageUrl?: string; // Optional field for the proof image
}
