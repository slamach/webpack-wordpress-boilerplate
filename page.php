<?php get_header(); ?>

<?php
  if (have_posts()) {
    while (have_posts()) {
        the_post();
?>

<main>Static Page</main>

<?php
  }
}
?>

<?php get_footer(); ?>
