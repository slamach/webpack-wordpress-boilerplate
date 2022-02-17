<?php
function theme_setup() {
  if (function_exists('add_theme_support')) {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

    add_post_type_support("page", "excerpt");
  }

  if (function_exists('add_image_size')) {
    // add_image_size('name-thumbnail', 800, 400, false);
  }

  // register_nav_menu('name-menu', 'Название меню');
}
add_action('after_setup_theme', 'theme_setup');

function theme_add_styles_and_scripts() {
  $manifest = json_decode(
    file_get_contents(__DIR__ . '/build/webpack.manifest.json'),
    true
  );

	wp_enqueue_style(
    'style',
    get_template_directory_uri() . $manifest['main.css'],
    array(),
    null,
    'all'
  );

	wp_enqueue_script(
    'script',
    get_template_directory_uri() . $manifest['main.js'],
    array(),
    null,
    true
  );

  if (is_home()) {
    wp_dequeue_style('wp-block-library');
    wp_deregister_script('wp-embed');
  }
}
add_action('wp_enqueue_scripts', 'theme_add_styles_and_scripts');
