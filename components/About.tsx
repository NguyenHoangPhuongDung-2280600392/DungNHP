
import React from 'react';
import { PERSONAL_PROFILE } from '../constants';

const About: React.FC = () => {
  const skills = [
    { category: 'Công nghệ phần mềm', items: ['Java (Spring Boot)', 'JavaScript (React)', 'TypeScript', 'MySQL'] },
    { category: 'Mạng máy tính', items: ['TCP/IP', 'Giao thức mạng', 'Socket Programming', 'Quản trị mạng cơ bản'] },
    { category: 'Công cụ', items: ['Git', 'VS Code', 'Postman', 'Linux Terminal'] }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
        <div className="w-full md:w-1/3">
          <div className="sticky top-24">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-400 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={PERSONAL_PROFILE.avatar} 
                alt={PERSONAL_PROFILE.name} 
                className="relative rounded-2xl w-full transition-all duration-500 shadow-xl"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">{PERSONAL_PROFILE.name}</h2>
              <p className="text-red-600 font-medium text-sm leading-tight">{PERSONAL_PROFILE.title}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <section className="prose prose-lg text-gray-600 leading-relaxed mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-red-600 rounded-full"></span>
              Về tôi
            </h3>
            <p className="mb-6 text-gray-800 font-medium text-lg leading-relaxed">
              Tôi là sinh viên năm cuối ngành Công nghệ thông tin, chuyên ngành Công nghệ phần mềm. Trong quá trình học tập, tôi đã được trang bị các kiến thức cơ bản và chuyên sâu về lập trình, phát triển phần mềm và hệ thống mạng.
            </p>
            <p className="mb-6">
              Hiện nay, tôi đang nghiên cứu và thực hiện báo cáo môn học <strong>Lập trình mạng máy tính</strong>, nhằm củng cố kiến thức về mô hình mạng, giao thức truyền thông và kỹ thuật lập trình ứng dụng mạng.
            </p>
            <p>
              Mục tiêu của blog này là nơi để tôi hệ thống lại những kiến thức đã học, chia sẻ những khó khăn và giải pháp trong quá trình làm báo cáo, đồng thời kết nối với những người có cùng đam mê về công nghệ.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-red-600"></span>
              Nền tảng kỹ năng
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-red-100 hover:shadow-sm transition-all">
                  <h4 className="font-bold text-gray-900 mb-4 text-xs uppercase tracking-widest text-red-600">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-600 text-[11px] font-bold rounded-md border border-gray-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 p-8 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl text-white shadow-lg shadow-red-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Định hướng sắp tới
            </h3>
            <p className="text-red-50 leading-relaxed text-sm">
              Sau khi hoàn thành báo cáo Lập trình mạng máy tính, tôi dự định sẽ đi sâu hơn vào việc xây dựng các ứng dụng real-time hiệu năng cao sử dụng WebSockets và tối ưu hóa trải nghiệm người dùng trên nền tảng Web.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
