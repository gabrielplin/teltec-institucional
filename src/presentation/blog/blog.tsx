import { BannerStaticTag } from '@/components';
import styles from './blog.module.scss';
import { BlogPostCardTag } from './components';
import { mockPosts } from './__mocks__/post.mock';

function BlogComponent() {
  const posts = mockPosts;

  const latestPost = posts[0];
  const olderPosts = posts.slice(1);

  return (
    <main>
      <BannerStaticTag backgroundColor="#1947B8" title="Blog" />
      <section>
        <div className={styles.gridPosts}>
          {olderPosts.slice(0, 3).map(post => (
            <BlogPostCardTag key={post.id} post={post} />
          ))}

          {/* Última postagem em destaque */}
          <BlogPostCardTag post={latestPost} highlight />

          {olderPosts.slice(3).map(post => (
            <BlogPostCardTag key={post.id} post={post} />
          ))}
        </div>
        {/* <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreBtn}>Carregar mais</button>
        </div> */}
      </section>
    </main>
  );
}

export default BlogComponent;
