import Vue from 'vue';

Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
});

Vue.filter('readMore', function (text, length, suffix) {
  if (text.length < length) return text;
  return text.substring(0, length) + suffix;
});
