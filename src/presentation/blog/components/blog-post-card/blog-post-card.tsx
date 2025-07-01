import styles from './blog-post-card.module.scss';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  authorImage: string;
  readingTime: string;
}

interface BlogPostCardProps {
  post: BlogPost;
  highlight?: boolean;
}

function BlogPostCardComponent({ post, highlight }: BlogPostCardProps) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : ''}`}>
      <span className={styles.readingTime}>{post.readingTime}</span>

      <div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.subtitle}>{post.subtitle}</p>
      </div>

      <div className={styles.footer}>
        <Image
          src={post.authorImage}
          alt={post.author}
          width={32}
          height={32}
        />
        <div>
          <span className={styles.author}>{post.author}</span>
          <span className={styles.date}>{post.date}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCardComponent;
