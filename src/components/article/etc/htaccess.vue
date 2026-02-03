<script lang="ts">
export const metadata = {
  updateDate: '2025/01/03',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="htaccess" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre>/home/users/1/{XXX}/<b class="t01">web</b>/  <b class="t02">// The root of domain</b>
  ├── <b class="t04">.htaccess</b>  <b class="t02">// Redirect to dist/index.html</b>
  ├── index.html
  └── <b class="t03">dist</b>/  <b class="t02">// The root of the custom domain</b>
      ├── <b class="t04">.htaccess</b>  <b class="t02">// If the access is HTTP, redirect to HTTPS</b>
      ├── index.html
      ├── assets/
      └── ...

---------------------------------
<b class="t02"># web/.htaccess</b>
<b class="t02"># Access to the Root is permanently redirected (301) to the custom root</b>
<b class="t04">RewriteCond %{HTTP_HOST} ^</b>{XXX}<b class="t04">$ [NC]</b>
<b class="t04">RewriteRule ^(.*)$ https://</b>{XXX}<b class="t04">/$1 [R=301,L]</b>

---------------------------------
<b class="t02"># web/dist/.htaccess</b>
<b class="t02"># Force redirect to HTTPS</b>
<b class="t04">RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]</b>
</pre>

    <pre>/home/users/1/{XXX}/<b class="t01">repo</b>/
  ├── {XXX}.git  <b class="t02">// bare repository</b>
  └── hooks/
      ├── <b class="t05">post-receive</b>
      └── ...

---------------------------------
<b class="t05">#!/bin/bash

WORKDIR="/home/users/1/</b>{XXX}<b class="t05">/tmp/deploy"
TARGET="/home/users/1/</b>{XXX}<b class="t05">/web/<b class="t03">dist</b>"

rm -rf "$WORKDIR"
mkdir -p "$WORKDIR"

<b class="t02"># Deploy the latest content</b>
GIT_WORK_TREE="$WORKDIR" git checkout -f

<b class="t02"># Sync only the dist folder (use cp if rsync is not available)</b>
if command -v rsync > /dev/null; then
  rsync -av --delete "$WORKDIR/<b class="t03">dist</b>/" "$TARGET/"
else
  rm -rf "$TARGET"
  mkdir -p "$TARGET"
  cp -r "$WORKDIR/<b class="t03">dist</b>/"* "$TARGET/"
fi

echo "Deployed to $TARGET"</b>
---------------------------------

<b class="t02">// Grant execute permission</b>
<b class="t01">chmod +x post-receive</b>
</pre>
  </PreCodes>
</template>
