import React from "react";

const BlogSinglePage = () => {
	return (
		<main className="main">
			<nav
				aria-label="breadcrumb"
				className="breadcrumb-nav border-0 mb-0"
			>
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="index.html">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="#">Blog</a>
						</li>
						<li
							className="breadcrumb-item active"
							aria-current="page"
						>
							Sed adipiscing ornare risus.
						</li>
					</ol>
				</div>
			</nav>
			<div className="page-content">
				<div className="container">
					<div className="row">
						<div className="col-lg-9">
							<article className="entry single-entry">
								<div className="entry-body">
									<figure className="entry-media">
										<img
											src="/assets/images/blog/single/1.jpg"
											alt="image desc"
										/>
									</figure>
									<h1 className="entry-title entry-title-big">
										{" "}
										Sed adipiscing ornare risus.{" "}
									</h1>
									<div className="entry-meta">
										<span>Nov 22, 2018</span>
										<span className="meta-separator">
											|
										</span>
										<span className="entry-author">
											{" "}
											by <a href="#">John Doe</a>
										</span>
									</div>
									<div className="entry-content editor-content">
										<p>
											Lorem ipsum dolor sit amet,
											consectetuer adipiscing elit.
											Phasellus hendrerit. Pellentesque
											aliquet nibh nec urna. In nisi
											neque, aliquet vel, dapibus id,
											mattis vel, nisi. Sed pretium,
											ligula sollicitudin laoreet viverra,
											tortor libero sodales leo, eget
											blandit nunc tortor eu nibh. Nullam
											mollis. Ut justo. Suspendisse
											potenti.
										</p>
										<p>
											Sed egestas, ante et vulputate
											volutpat, eros pede semper est,
											vitae luctus metus libero eu augue.
											Morbi purus libero, faucibus
											adipiscing, commodo quis, gravida
											id, est. Sed lectus. Praesent
											elementum hendrerit tortor. Sed
											semper lorem at felis. Vestibulum
											volutpat, lacus a{" "}
											<a href="#">ultrices sagittis</a>,
											mi neque euismod dui, eu pulvinar
											nunc sapien ornare nisl. Phasellus
											pede arcu, dapibus eu, fermentum et,
											dapibus sed, urna.{" "}
										</p>
										<p>
											Phasellus hendrerit. Pellentesque
											aliquet nibh nec urna. In nisi
											neque, aliquet vel, dapibus id,
											mattis vel, nisi. Sed pretium,
											ligula{" "}
											<a href="#">sollicitudin laoreet</a>{" "}
											viverra, tortor libero sodales leo,
											eget blandit nunc tortor eu nibh.
											Nullam mollis. Ut justo. Suspendisse
											potenti. Sed egestas, ante et
											vulputate volutpat, eros pede semper
											est, vitae luctus metus libero eu
											augue. Morbi purus libero, faucibus
											adipiscing, commodo quis, gravida
											id, est. Sed lectus. Praesent
											elementum hendrerit tortor. Sed
											semper lorem at felis.{" "}
										</p>
										<div className="pb-1" />
										<img
											src="/assets/images/blog/single/fullwidth-sidebar/5.jpg"
											alt="image"
										/>
										<div className="pb-1" />
										<p>
											Morbi purus libero, faucibus
											adipiscing, commodo quis, gravida
											id, est. Sed lectus. Praesent
											elementum hendrerit tortor. Sed
											semper lorem at felis. Vestibulum
											volutpat, lacus a ultrices sagittis,
											mi neque euismod dui, eu pulvinar
											nunc sapien ornare nisl. Phasellus
											pede arcu, dapibus eu, fermentum et,
											dapibus sed, urna. Morbi interdum
											mollis sapien. Sed ac risus.
											Phasellus lacinia, magna a
											ullamcorper laoreet, lectus arcu
											pulvinar risus, vitae facilisis
											libero dolor a purus.{" "}
										</p>
										<div className="pb-1" />
										<h3>Morbi interdum mollis sapien.</h3>
										<p>
											Sed pretium, ligula sollicitudin
											laoreet viverra, tortor libero
											sodales leo, eget blandit nunc
											tortor eu nibh. Nullam mollis. Ut
											justo. Suspendisse potenti. Sed
											egestas, ante et vulputate volutpat,
											eros pede semper est, vitae luctus
											metus libero eu augue. Morbi purus
											libero, faucibus adipiscing, commodo
											quis, gravida id, est. Sed lectus.{" "}
										</p>
										<p>
											Praesent{" "}
											<a href="#">elementum hendrerit</a>{" "}
											tortor. Sed semper lorem at felis.
											Vestibulum volutpat, lacus a
											ultrices sagittis, mi neque euismod
											dui, eu pulvinar nunc sapien ornare
											nisl. Phasellus pede arcu, dapibus
											eu, fermentum et, dapibus sed, urna.{" "}
										</p>
									</div>
									<div className="entry-footer row no-gutters flex-column flex-md-row">
										<div className="col-md">
											<div className="entry-tags">
												<span>Tags:</span>
												<a href="#">photography</a>
												<a href="#">style</a>
											</div>
										</div>
										<div className="col-md-auto mt-2 mt-md-0">
											<div className="social-icons social-icons-color">
												<span className="social-label">
													Share this post:
												</span>
												<a
													href="#"
													className="social-icon social-facebook"
													title="Facebook"
													target="_blank"
												>
													<i className="icon-facebook-f" />
												</a>
												<a
													href="#"
													className="social-icon social-twitter"
													title="Twitter"
													target="_blank"
												>
													<i className="icon-twitter" />
												</a>
												<a
													href="#"
													className="social-icon social-pinterest"
													title="Pinterest"
													target="_blank"
												>
													<i className="icon-pinterest" />
												</a>
												<a
													href="#"
													className="social-icon social-linkedin"
													title="Linkedin"
													target="_blank"
												>
													<i className="icon-linkedin" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</article>
							<nav
								className="pager-nav"
								aria-label="Page navigation"
							>
								<a
									className="pager-link pager-link-prev"
									href="blog-single.html"
									aria-label="Previous"
									tabIndex={-1}
								>
									{" "}
									Previous Post{" "}
									<span className="pager-link-title">
										Cras iaculis ultricies nulla
									</span>
								</a>
								<a
									className="pager-link pager-link-next"
									href="blog-single.html"
									aria-label="Next"
									tabIndex={-1}
								>
									{" "}
									Next Post{" "}
									<span className="pager-link-title">
										Praesent placerat risus
									</span>
								</a>
							</nav>
							<div className="related-posts">
								<h3 className="title">Related Posts</h3>
								<div
									className="owl-carousel owl-simple"
									data-toggle="owl"
									data-owl-options='{
                                      "nav": false, 
                                      "dots": true,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":1
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          }
                                      }
                                  }'
								>
									<article className="entry entry-grid">
										<figure className="entry-media">
											<a href="blog-single.html">
												<img
													src="/assets/images/blog/grid/3cols/post-1.jpg"
													alt="image desc"
												/>
											</a>
										</figure>
										<div className="entry-body">
											<div className="entry-meta">
												<span>Nov 22, 2018</span>
												<span className="meta-separator">
													|
												</span>
												<span className="entry-author">
													{" "}
													by <a href="#">John Doe</a>
												</span>
											</div>
											<h2 className="entry-title">
												<a href="blog-single.html">
													Cras ornare tristique elit.
												</a>
											</h2>
										</div>
									</article>
									<article className="entry entry-grid">
										<figure className="entry-media">
											<a href="blog-single.html">
												<img
													src="/assets/images/blog/grid/3cols/post-2.jpg"
													alt="image desc"
												/>
											</a>
										</figure>
										<div className="entry-body">
											<div className="entry-meta">
												<span>Nov 22, 2018</span>
												<span className="meta-separator">
													|
												</span>
												<span className="entry-author">
													{" "}
													by <a href="#">John Doe</a>
												</span>
											</div>
											<h2 className="entry-title">
												<a href="blog-single.html">
													Vivamus ntulla necante.
												</a>
											</h2>
										</div>
									</article>
									<article className="entry entry-grid">
										<figure className="entry-media">
											<a href="blog-single.html">
												<img
													src="/assets/images/blog/grid/3cols/post-3.jpg"
													alt="image desc"
												/>
											</a>
										</figure>
										<div className="entry-body">
											<div className="entry-meta">
												<span>Nov 22, 2018</span>
												<span className="meta-separator">
													|
												</span>
												<span className="entry-author">
													{" "}
													by <a href="#">John Doe</a>
												</span>
											</div>
											<h2 className="entry-title">
												<a href="blog-single.html">
													Utaliquam sollicitudin leo.
												</a>
											</h2>
										</div>
									</article>
									<article className="entry entry-grid">
										<figure className="entry-media">
											<a href="blog-single.html">
												<img
													src="/assets/images/blog/grid/3cols/post-4.jpg"
													alt="image desc"
												/>
											</a>
										</figure>
										<div className="entry-body">
											<div className="entry-meta">
												<span>Nov 22, 2018</span>
												<span className="meta-separator">
													|
												</span>
												<span className="entry-author">
													{" "}
													by <a href="#">John Doe</a>
												</span>
											</div>
											<h2 className="entry-title">
												<a href="blog-single.html">
													Fusce pellentesque suscipit.
												</a>
											</h2>
										</div>
									</article>
								</div>
							</div>
							<div className="comments">
								<h3 className="title">3 Comments</h3>
								<ul>
									<li>
										<div className="comment">
											<figure className="comment-media">
												<a href="#">
													<img
														src="/assets/images/blog/comments/1.jpg"
														alt="User name"
													/>
												</a>
											</figure>
											<div className="comment-body">
												<a
													href="#"
													className="comment-reply"
												>
													Reply
												</a>
												<div className="comment-user">
													<h4>
														<a href="#">
															Jimmy Pearson
														</a>
													</h4>
													<span className="comment-date">
														November 9, 2018 at 2:19
														pm
													</span>
												</div>
												<div className="comment-content">
													<p>
														Sed pretium, ligula
														sollicitudin laoreet
														viverra, tortor libero
														sodales leo, eget
														blandit nunc tortor eu
														nibh. Nullam mollis. Ut
														justo. Suspendisse
														potenti.{" "}
													</p>
												</div>
											</div>
										</div>
										<ul>
											<li>
												<div className="comment">
													<figure className="comment-media">
														<a href="#">
															<img
																src="/assets/images/blog/comments/2.jpg"
																alt="User name"
															/>
														</a>
													</figure>
													<div className="comment-body">
														<a
															href="#"
															className="comment-reply"
														>
															Reply
														</a>
														<div className="comment-user">
															<h4>
																<a href="#">
																	Lena Knight
																</a>
															</h4>
															<span className="comment-date">
																November 9, 2018
																at 2:19 pm
															</span>
														</div>
														<div className="comment-content">
															<p>
																Morbi interdum
																mollis sapien.
																Sed ac risus.
															</p>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</li>
									<li>
										<div className="comment">
											<figure className="comment-media">
												<a href="#">
													<img
														src="/assets/images/blog/comments/3.jpg"
														alt="User name"
													/>
												</a>
											</figure>
											<div className="comment-body">
												<a
													href="#"
													className="comment-reply"
												>
													Reply
												</a>
												<div className="comment-user">
													<h4>
														<a href="#">
															Johnathan Castillo
														</a>
													</h4>
													<span className="comment-date">
														November 9, 2018 at 2:19
														pm
													</span>
												</div>
												<div className="comment-content">
													<p>
														Vestibulum volutpat,
														lacus a ultrices
														sagittis, mi neque
														euismod dui, eu pulvinar
														nunc sapien ornare nisl.
														Phasellus pede arcu,
														dapibus eu, fermentum
														et, dapibus sed, urna.
													</p>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="reply">
								<div className="heading">
									<h3 className="title">Leave A Reply</h3>
									<p className="title-desc">
										Your email address will not be
										published. Required fields are marked *
									</p>
								</div>
								<form action="#">
									<label
										htmlFor="reply-message"
										className="sr-only"
									>
										Comment
									</label>
									<textarea
										name="reply-message"
										id="reply-message"
										cols={30}
										rows={4}
										className="form-control"
										required
										placeholder="Comment *"
										defaultValue={""}
									/>
									<div className="row">
										<div className="col-md-6">
											<label
												htmlFor="reply-name"
												className="sr-only"
											>
												Name
											</label>
											<input
												type="text"
												className="form-control"
												id="reply-name"
												name="reply-name"
												required
												placeholder="Name *"
											/>
										</div>
										<div className="col-md-6">
											<label
												htmlFor="reply-email"
												className="sr-only"
											>
												Email
											</label>
											<input
												type="email"
												className="form-control"
												id="reply-email"
												name="reply-email"
												required
												placeholder="Email *"
											/>
										</div>
									</div>
									<button
										type="submit"
										className="btn btn-outline-primary-2"
									>
										<span>POST COMMENT</span>
										<i className="icon-long-arrow-right" />
									</button>
								</form>
							</div>
						</div>
						<aside className="col-lg-3">
							<div className="sidebar">
								<div className="widget widget-search">
									<h3 className="widget-title">Search</h3>
									<form action="#">
										<label htmlFor="ws" className="sr-only">
											Search in blog
										</label>
										<input
											type="search"
											className="form-control"
											name="ws"
											id="ws"
											placeholder="Search in blog"
											required
										/>
										<button type="submit" className="btn">
											<i className="icon-search" />
											<span className="sr-only">
												Search
											</span>
										</button>
									</form>
								</div>
								<div className="widget widget-cats">
									<h3 className="widget-title">Categories</h3>
									<ul>
										<li>
											<a href="#">
												Lifestyle <span>3</span>
											</a>
										</li>
										<li>
											<a href="#">
												Shopping <span>3</span>
											</a>
										</li>
										<li>
											<a href="#">
												Fashion <span>1</span>
											</a>
										</li>
										<li>
											<a href="#">
												Travel <span>3</span>
											</a>
										</li>
										<li>
											<a href="#">
												Hobbies <span>2</span>
											</a>
										</li>
									</ul>
								</div>
								<div className="widget">
									<h3 className="widget-title">
										Popular Posts
									</h3>
									<ul className="posts-list">
										<li>
											<figure>
												<a href="#">
													<img
														src="/assets/images/blog/sidebar/post-1.jpg"
														alt="post"
													/>
												</a>
											</figure>
											<div>
												<span>Nov 22, 2018</span>
												<h4>
													<a href="#">
														Aliquam tincidunt mauris
														eurisus.
													</a>
												</h4>
											</div>
										</li>
										<li>
											<figure>
												<a href="#">
													<img
														src="/assets/images/blog/sidebar/post-2.jpg"
														alt="post"
													/>
												</a>
											</figure>
											<div>
												<span>Nov 19, 2018</span>
												<h4>
													<a href="#">
														Cras ornare tristique
														elit.
													</a>
												</h4>
											</div>
										</li>
										<li>
											<figure>
												<a href="#">
													<img
														src="/assets/images/blog/sidebar/post-3.jpg"
														alt="post"
													/>
												</a>
											</figure>
											<div>
												<span>Nov 12, 2018</span>
												<h4>
													<a href="#">
														Vivamus vestibulum
														ntulla nec ante.
													</a>
												</h4>
											</div>
										</li>
										<li>
											<figure>
												<a href="#">
													<img
														src="/assets/images/blog/sidebar/post-4.jpg"
														alt="post"
													/>
												</a>
											</figure>
											<div>
												<span>Nov 25, 2018</span>
												<h4>
													<a href="#">
														Donec quis dui at dolor
														tempor interdum.
													</a>
												</h4>
											</div>
										</li>
									</ul>
								</div>
								<div className="widget widget-banner-sidebar">
									<div className="banner-sidebar-title">
										ad box 280 x 280
									</div>
									<div className="banner-sidebar">
										<a href="#">
											<img
												src="/assets/images/blog/sidebar/banner.jpg"
												alt="banner"
											/>
										</a>
									</div>
								</div>
								<div className="widget">
									<h3 className="widget-title">
										Browse Tags
									</h3>
									<div className="tagcloud">
										<a href="#">fashion</a>
										<a href="#">style</a>
										<a href="#">women</a>
										<a href="#">photography</a>
										<a href="#">travel</a>
										<a href="#">shopping</a>
										<a href="#">hobbies</a>
									</div>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</main>
	);
};

export default BlogSinglePage;
