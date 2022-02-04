<?php get_header(); ?>

<?php
  if (have_posts()) {
    while (have_posts()) {
        the_post();
?>

<main>Single Post Page</main>

<?php
  }
}
?>

<?php get_footer(); ?>
