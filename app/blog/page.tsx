import CardBlog from "@/components/cardBlog";
import { title } from "@/components/primitives";
import { blogPosts } from "@/config/blogPost";

export default function BlogPage() {
	return (
		<section className="text-center">
			<h1 className={title()}>Blogs</h1>
			<p></p>
			<div className="flex flex-row gap-4 py-10">
				{
					blogPosts.map((blog) => (
						<CardBlog
							srcImg={blog.imageCard}
							title={blog.titulo}
							slug={blog.slug}
						/>
					))
				}
			</div>

		</section>
	);
}
