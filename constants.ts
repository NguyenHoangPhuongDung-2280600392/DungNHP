import { BlogPost, Profile, Achievement } from './types';

export const PERSONAL_PROFILE: Profile = {
  name: "Nguyễn Hoàng Phương Dung",
  title: "Sinh viên năm cuối ngành Công nghệ thông tin",
  bio: "Chuyên ngành Công nghệ phần mềm. Đam mê nghiên cứu về mô hình mạng, giao thức truyền thông và kỹ thuật lập trình ứng dụng mạng hiện đại.",
  avatar: "https://img.freepik.com/free-vector/cute-monkey-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4033.jpg",
  socials: {
    github: "https://github.com/NguyenHoangPhuongDung-2280600392/NguyenHoangPhuongDung-2280600392",
    facebook: "https://www.facebook.com/share/1Bh7LLZz7t/",
    phone: "0774803512"
  }
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a1',
    title: 'Chứng chỉ Cisco Networking Basics',
    description: 'Hoàn thành khóa học nền tảng về mạng máy tính của Cisco, nắm vững các khái niệm về thiết bị đầu cuối và cấu trúc mạng cơ bản.',
    year: '2025',
    icon: '🌐',
    proofImageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'a2',
    title: 'Chứng chỉ Cisco JavaScript Essentials 1',
    description: 'Đạt chứng chỉ hoàn thành phần 1 về JavaScript, làm chủ cú pháp cơ bản, kiểu dữ liệu và luồng điều khiển trong lập trình.',
    year: '2025',
    icon: '📜',
    proofImageUrl: ''
  },
  {
    id: 'a3',
    title: 'Chứng chỉ Cisco JavaScript Essentials 2',
    description: 'Hoàn thành cấp độ nâng cao về JavaScript, chuyên sâu về xử lý bất đồng bộ, lập trình hướng đối tượng và DOM manipulation.',
    year: '2025',
    icon: '💻',
    proofImageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'a4',
    title: 'Lễ trao giải hội thi IT Hutech GOT TALENT & hội thảo "Định hướng nghề IT và tư vấn chuyên nghành CNTT" 2024',
    description: 'Giấy chứng nhận tham gia chương trình Lễ trao giải hội thi HUTECH IT GOT TALENT & Hội thảo "Định hướng nghề IT và tư vấn chuyên ngành CNTT" do Khoa Công nghệ thông tin - Đại học Công nghệ TP.HCM trao tặng vào ngày 20/12/2024.',
    year: '2024',
    icon: '🏆',
    proofImageUrl: 'https://raw.githubusercontent.com/NguyenHoangPhuongDung-2280600392/NguyenHoangPhuongDung-2280600392/main/hutech_certificate.png'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Lập trình Socket trong Java: Từ lý thuyết đến thực hành',
    summary: 'Hướng dẫn chi tiết cách xây dựng ứng dụng Client-Server đơn giản sử dụng TCP Socket trong Java.',
    category: 'Java',
    date: '2024-05-10',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '10 phút',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    content: `Lập trình Socket trong Java là kỹ thuật xây dựng các ứng dụng mạng dựa trên mô hình client–server, cho phép các chương trình chạy trên những máy khác nhau có thể giao tiếp và trao đổi dữ liệu thông qua mạng. Java cung cấp các lớp hỗ trợ socket như Socket và ServerSocket, giúp lập trình viên dễ dàng thiết lập kết nối, gửi và nhận dữ liệu dựa trên các giao thức phổ biến như TCP/IP. Thông qua việc kết hợp lý thuyết về mạng máy tính và thực hành lập trình socket, người học có thể hiểu rõ cách thức hoạt động của quá trình truyền thông dữ liệu, đồng thời xây dựng được các ứng dụng mạng đơn giản như chat, truyền file hay dịch vụ client–server cơ bản.`
  },
  {
    id: '2',
    title: 'Java Collections Framework: Phân tích hiệu năng',
    summary: 'So sánh ArrayList vs LinkedList, HashSet vs TreeSet để lựa chọn cấu trúc dữ liệu tối ưu nhất.',
    category: 'Java',
    date: '2024-05-12',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '12 phút',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800',
    content: `Java Collections Framework là tập hợp các lớp và giao diện được Java cung cấp nhằm hỗ trợ việc lưu trữ, quản lý và thao tác với các tập dữ liệu một cách hiệu quả. Framework này bao gồm các cấu trúc dữ liệu phổ biến như List, Set, Map với các cài đặt tiêu biểu như ArrayList, LinkedList, HashSet, TreeSet, HashMap và TreeMap. Về mặt hiệu năng, mỗi cấu trúc dữ liệu có đặc điểm và độ phức tạp khác nhau: ArrayList cho phép truy cập phần tử nhanh với độ phức tạp O(1) nhưng chậm khi chèn/xóa ở giữa; LinkedList phù hợp với thao tác thêm/xóa nhiều nhưng truy cập ngẫu nhiên kém; HashMap và HashSet cho hiệu năng tìm kiếm, thêm và xóa trung bình O(1), trong khi TreeMap và TreeSet có độ phức tạp O(log n) nhưng đảm bảo dữ liệu được sắp xếp. Việc lựa chọn đúng collection giúp tối ưu hiệu năng và tài nguyên cho chương trình Java..`
  },
  {
    id: '3',
    title: 'Tối ưu hóa mã nguồn với Java Stream API',
    summary: 'Cách sử dụng filter, map, reduce để xử lý dữ liệu một cách ngắn gọn và hiệu quả.',
    category: 'Java',
    date: '2024-05-15',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '8 phút',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    content: `Java Stream API là một công cụ mạnh mẽ trong Java, cho phép xử lý dữ liệu theo phong cách lập trình hàm, giúp mã nguồn trở nên ngắn gọn, rõ ràng và dễ bảo trì hơn so với cách lập trình truyền thống sử dụng vòng lặp. Stream API làm việc hiệu quả với các Collection và hỗ trợ xử lý dữ liệu theo từng bước thông qua chuỗi các thao tác trung gian và thao tác kết thúc.

Một ưu điểm quan trọng của Stream API là khả năng biểu diễn logic xử lý dữ liệu một cách trực quan thông qua các phương thức như filter, map, sorted, limit và reduce. Các thao tác này cho phép lập trình viên dễ dàng xây dựng các luồng xử lý phức tạp mà không cần quản lý chi tiết trạng thái hay chỉ số vòng lặp.

Bên cạnh đó, Stream API hỗ trợ xử lý song song thông qua parallelStream, giúp tận dụng khả năng đa lõi của bộ vi xử lý để cải thiện hiệu năng trong những bài toán xử lý dữ liệu lớn. Tuy nhiên, để đạt hiệu quả tối ưu, lập trình viên cần cân nhắc kỹ lưỡng về đặc điểm dữ liệu và chi phí xử lý song song nhằm tránh làm giảm hiệu suất hoặc tăng độ phức tạp không cần thiết.`
  },
  {
    id: '4',
    title: 'Đa luồng trong Java: Giải quyết bài toán đồng bộ',
    summary: 'Tìm hiểu về synchronized, Lock và ExecutorService để xây dụng ứng dụng đa nhiệm an toàn.',
    category: 'Java',
    date: '2024-05-18',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '15 phút',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    content: `Đa luồng trong Java là kỹ thuật cho phép nhiều luồng thực thi đồng thời trong cùng một chương trình, giúp tận dụng hiệu quả tài nguyên hệ thống và nâng cao hiệu năng xử lý. Tuy nhiên, khi nhiều luồng cùng truy cập và thao tác trên dữ liệu dùng chung, các vấn đề như tranh chấp tài nguyên, dữ liệu không nhất quán hoặc điều kiện tranh chấp (race condition) có thể xảy ra.

Để giải quyết bài toán đồng bộ, Java cung cấp nhiều cơ chế như từ khóa synchronized, các lớp khóa trong gói java.util.concurrent (ví dụ Lock, ReentrantLock) và các công cụ hỗ trợ đồng bộ khác như Semaphore, CountDownLatch. Những cơ chế này giúp kiểm soát quyền truy cập vào tài nguyên dùng chung, đảm bảo rằng chỉ một luồng được thực thi tại một thời điểm trong vùng critical section.

Việc sử dụng đúng cơ chế đồng bộ không chỉ đảm bảo tính chính xác của chương trình mà còn góp phần tối ưu hiệu năng. Lập trình viên cần cân nhắc giữa mức độ an toàn luồng và chi phí đồng bộ để tránh hiện tượng tắc nghẽn hoặc giảm hiệu suất trong các ứng dụng đa luồng.`
  },
  {
    id: '5',
    title: 'Spring Boot Dependency Injection: Một cái nhìn sâu sắc',
    summary: 'Tại sao DI lại quan trọng và cách Spring Container quản lý vòng đời của các Bean.',
    category: 'Java',
    date: '2024-05-20',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '11 phút',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    content: `Dependency Injection (DI) trong Spring Boot là một nguyên lý thiết kế quan trọng giúp giảm sự phụ thuộc chặt chẽ giữa các thành phần trong ứng dụng. Thay vì các đối tượng tự khởi tạo và quản lý phụ thuộc của mình, Spring Boot đảm nhận vai trò tạo, cấu hình và liên kết các đối tượng thông qua IoC Container (Inversion of Control).

Spring Boot hỗ trợ nhiều hình thức Dependency Injection như Constructor Injection, Setter Injection và Field Injection, trong đó Constructor Injection được khuyến nghị sử dụng do đảm bảo tính bất biến và dễ kiểm thử. Thông qua các annotation như @Component, @Service, @Repository, @Autowired, Spring tự động quét và quản lý các bean, giúp quá trình phát triển ứng dụng trở nên linh hoạt và nhất quán hơn.

Nhờ cơ chế DI, ứng dụng Spring Boot trở nên dễ mở rộng, dễ bảo trì và thuận tiện cho việc kiểm thử đơn vị. Việc tách biệt rõ ràng giữa các thành phần xử lý nghiệp vụ, truy cập dữ liệu và điều khiển luồng không chỉ nâng cao chất lượng mã nguồn mà còn giúp lập trình viên áp dụng hiệu quả các nguyên lý thiết kế hướng đối tượng trong các hệ thống phần mềm hiện đại.`
  },
  {
    id: '6',
    title: 'Java Generics: Viết code linh hoạt và an toàn',
    summary: 'Cách sử dụng Wildcards và Type Parameters để tái sử dụng mã nguồn tối đa.',
    category: 'Java',
    date: '2024-05-22',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '9 phút',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    content: `Java Generics là cơ chế cho phép lập trình viên định nghĩa lớp, interface và phương thức với kiểu dữ liệu tổng quát, giúp tăng tính linh hoạt và khả năng tái sử dụng của mã nguồn. Thay vì làm việc với các kiểu dữ liệu cụ thể hoặc Object, Generics cho phép chỉ định kiểu dữ liệu ngay từ thời điểm biên dịch.

Việc sử dụng Generics giúp đảm bảo an toàn kiểu (type safety), hạn chế lỗi ép kiểu và phát hiện lỗi sớm trong quá trình biên dịch. Điều này không chỉ làm cho mã nguồn rõ ràng, dễ đọc hơn mà còn giảm nguy cơ phát sinh lỗi trong quá trình chạy chương trình.

Nhờ Generics, các cấu trúc dữ liệu và API trong Java trở nên linh hoạt hơn, cho phép xử lý nhiều kiểu dữ liệu khác nhau mà vẫn giữ được tính chặt chẽ và ổn định. Đây là một trong những tính năng quan trọng góp phần nâng cao chất lượng và độ tin cậy của các ứng dụng Java hiện đại.`
  },
  {
    id: '9',
    title: 'Biểu thức Lambda và Functional Interface trong Java',
    summary: 'Biến đổi mã nguồn rườm rà thành những dòng code tinh gọn và hiện đại.',
    category: 'Java',
    date: '2024-06-01',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '8 phút',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=800',
    content: `Nếu chúng ta nhìn vào một số ngôn ngữ lập trình khác như C++, JavaScript; chúng được gọi là ngôn ngữ lập trình hàm (functional programming languages) vì chúng ta có thể viết các hàm riêng lẻ và sử dụng khi cần. Một số ngôn ngữ trong đó hỗ trợ cả lập trình hướng đối tượng lẫn lập trình hàm. Việc lập trình hướng đối tượng không hề xấu, nhưng nó khiến chương trình trở nên dài dòng và rườm rà. Ví dụ, giả sử chúng ta cần tạo một instance của Runnable. Thông thường, ta làm điều đó bằng cách sử dụng lớp ẩn danh. 

Một số đặc điểm: Một interface chỉ có duy nhất một phương thức trừu tượng thì được gọi là Functional Interface. Annotation @FunctionalInterface được thêm vào để giúp đánh dấu một interface là functional. Việc sử dụng annotation này không bắt buộc, nhưng là một thực hành tốt để tránh việc vô tình thêm các phương thức khác. Nếu một interface được chú thích bằng @FunctionalInterface và ta cố gắng thêm nhiều hơn một phương thức trừu tượng, trình biên dịch sẽ báo lỗi.

Lợi ích lớn nhất của functional interfaces trong Java 8 là chúng ta có thể dùng lambda expressions để khởi tạo chúng và không cần phải viết các lớp ẩn danh dài dòng. API Collections trong Java 8 đã được viết lại và một API mới là Stream API đã được giới thiệu, sử dụng rất nhiều functional interface. Java 8 đã định nghĩa rất nhiều functional interface trong gói java.util.function.

Biểu thức Lambda (Lambda Expression) là cách giúp chúng ta hình dung lập trình hàm trong thếới Java hướng đối tượng. Đối tượng là nền tảng của ngôn ngữ lập trình Java, và chúng ta không thể có một hàm mà không gắn liền với đối tượng.

Đó là lý do vì sao Java chỉ hỗ trợ lambda expression với functional interfaces. Vì functional interface chỉ có một phương thức trừu tượng, nên sẽ không xảy ra nhầm lẫn khi áp dụng lambda expression vào phương thức đó. Cú pháp của lambda expression là (tham số) -> (phần thân).`
  },
  {
    id: '10',
    title: 'JavaScript Promises và Async/Await: Xử lý bất đồng bộ',
    summary: 'Làm chủ các tác vụ tốn thời gian như gọi API mà không gây đứng trình duyệt.',
    category: 'JavaScript',
    date: '2024-06-05',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '11 phút',
    imageUrl: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?auto=format&fit=crop&q=80&w=800',
    content: `Bất đồng bộ trong JavaScript
Bất đồng bộ cho phép chương trình tiếp tục thực thi các đoạn mã khác mà không phải chờ những tác vụ tốn thời gian như gọi API, đọc/ghi dữ liệu hay xử lý mạng hoàn thành. Nhờ đó, ứng dụng hoạt động mượt mà hơn và không bị treo trong quá trình chờ đợi.

Promise
Promise là một đối tượng đại diện cho kết quả của một tác vụ bất đồng bộ trong tương lai. Một Promise có ba trạng thái: pending (đang chờ), fulfilled (thành công) và rejected (thất bại). Việc sử dụng Promise giúp quản lý luồng xử lý rõ ràng hơn và hạn chế tình trạng callback hell khi phải xử lý nhiều tác vụ liên tiếp.

Async/Await
Async/Await là cú pháp hiện đại được xây dựng dựa trên Promise, cho phép viết code bất đồng bộ theo cách gần giống với code đồng bộ. Từ khóa async dùng để khai báo hàm bất đồng bộ, còn await dùng để chờ Promise hoàn thành trước khi tiếp tục thực thi, giúp code dễ đọc và dễ hiểu hơn.

Ý nghĩa và ứng dụng
Nhờ Promises và Async/Await, việc xử lý bất đồng bộ trong JavaScript trở nên đơn giản, dễ bảo trì và dễ bắt lỗi hơn thông qua try...catch. Đây là phương pháp được sử dụng phổ biến trong JavaScript hiện đại, đặc biệt trong các ứng dụng web và mobile có nhiều thao tác bất đồng bộ.`
  },
  {
    id: '11',
    title: 'Fetch API: Giao tiếp với Server bằng JavaScript',
    summary: 'Cách thực hiện các yêu cầu GET, POST và xử lý JSON dữ liệu hiệu quả.',
    category: 'JavaScript',
    date: '2024-06-08',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '9 phút',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    content: `fetch() là một phương thức JavaScript được sử dụng để thực hiện các yêu cầu mạng và lấy dữ liệu từ một URL, hoặc gửi dữ liệu đến một máy chủ. Hàm này trả về một Promise, điều này có nghĩa là bạn có thể sử dụng các phương thức như then() và catch() để xử lý kết quả trả về và các lỗi xảy ra trong quá trình thực hiện yêu cầu.

1.2. Tại sao sử dụng Fetch?
fetch() mang lại nhiều lợi ích so với XMLHttpRequest:

Đơn giản và dễ sử dụng: Cú pháp của fetch() ngắn gọn và dễ hiểu hơn, giúp bạn dễ dàng thực hiện các yêu cầu HTTP mà không cần phải làm việc với nhiều chi tiết phức tạp.
Hỗ trợ promise: Điều này giúp xử lý các yêu cầu bất đồng bộ một cách dễ dàng và mượt mà, tránh tình trạng callback hell.
Không chặn giao diện người dùng: Vì fetch() sử dụng promise, các thao tác với dữ liệu không làm gián đoạn giao diện người dùng, giúp cải thiện trải nghiệm người dùng.
Tiện lợi trong việc xử lý JSON: fetch() hỗ trợ trả về dữ liệu dưới dạng JSON, giúp việc chuyển đổi dữ liệu giữa các hệ thống trở nên đơn giản và nhanh chóng.`
  },
  {
    id: '12',
    title: 'WebSockets trong Node.js: Lập trình mạng thời gian thực',
    summary: 'Xây dựng ứng dụng Chat Real-time sử dụng thư viện Socket.io.',
    category: 'JavaScript',
    date: '2024-06-12',
    author: 'Nguyễn Hoàng Phương Dung',
    readTime: '14 phút',
    imageUrl: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=800',
    content: `Tại sao chọn Node.js trong WebSockets : Node.js, với kiến trúc non-blocking I/O và sự hỗ trợ mạnh mẽ từ cộng đồng, là nền tảng hoàn hảo để xây dựng ứng dụng real-time với WebSocket:

Hiệu suất: Xử lý hàng nghìn kết nối đồng thời mà không chậm.
Thư viện phong phú: Các gói như ws hoặc Socket.IO giúp lập trình dễ dàng.
JavaScript thống nhất: Dùng một ngôn ngữ cho cả server và client, giảm thời gian học hỏi.

Mẹo nâng cao :
Dùng Socket.IO: Nếu cần tính năng như room, reconnection, thử npm install socket.io.
Xử lý lỗi: Thêm try-catch trong server.js để tránh crash khi client ngắt đột ngột.
Tối ưu kết nối: Giới hạn số client tối đa bằng server.maxConnections.
Bảo mật: Dùng wss:// (WebSocket Secure) với HTTPS khi triển khai thực tế.`
  }
];