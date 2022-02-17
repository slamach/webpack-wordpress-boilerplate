<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#2b2b2b">
  <link rel="icon" href="<?php echo home_url() . "/favicon.ico"; ?>">
  <link rel="apple-touch-icon" href="<?php echo home_url() . "/favicons/favicon-180.png"; ?>">
  <link rel="manifest" href="<?php echo home_url() . "/manifest.webmanifest"; ?>">

  <?php wp_head(); ?>
  <?php get_template_part("template-parts/header-analytics");?>
</head>

<body>
  <header>
    Site Header
  </header>
