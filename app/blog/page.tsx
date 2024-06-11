import CardBlog from "@/components/cardBlog";
import { title } from "@/components/primitives";
import { blogPosts } from "@/config/blogPost";

export default function BlogPage() {
	return (
		<section className="text-center">
			<h1 className={title()}>Blogs</h1>
			<p></p>
			<div className="flex flex-row gap-2 py-10 md:gap-4">
				{
					blogPosts.map((blog) => (
						<CardBlog
							key={blog.slug}
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
