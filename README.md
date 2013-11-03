
<h1>Stylish Select 0.4.1</h1>
<h2>A cross-browser, accessible alternative to the standard form element which can be fully customised with CSS</h2>
<p>Stylish Select attempts to replicate the functionality of the browser default select box as closely as possible with support for keyboard navigation, and intelligent positioning.</p>
<p>Stylish Select aims to have a minimal code footprint and weighs in at just over 3KB when minified.</p>
<a href="https://github.com/joomi/stylish-select">Get latest source code from GitHub</a>
<h2>Usage</h2>
<p>First, include the stylesheet, jQuery and the stylish select .js file in your html head tag</p>
<p>The plugin can be used to replace any select with the following:</p>
<pre>$(document).ready(function(){  	$('#my-dropdown').sSelect();  });          </pre>
<div>
  <h2>Simplest example, option selected by default</h2>
  <p>You can use the alphabetical and arrow keys to navigate the list as you would a browser default select.</p>
</div>
<div>
  <h2>Change event</h2>
  <p>Stylish Select alters the original select on the page, so you can access it's change event:</p>
  <pre>//change event  $('#my-dropdownChange').sSelect().change(function(){alert('changed')});              </pre>
</div>
<div>
  <h2>Grouped options</h2>
  <p>Stylish Select supports optgroups.</p>
</div>
<div id="win-xp">
  <h2>Windows XP style</h2>
  <p>The Stylish Select can be styled with CSS in whatever way you like.</p>
</div>
<div id="get-set">
  <h2>Getting/setting the value</h2>
  <pre>//set value  $('#setVal').click(function(){  	$('#my-dropdown5').getSetSSValue('Sit');  });    //get value  $('#getVal').click(function(){  	alert('The value is: '+$('#my-dropdown5').getSetSSValue());  });              
</pre>
</div>
<div id="update">
  <h2>Add new options to Stylish Select</h2>
  <pre>//add options to select and update  $('#addOptions').click(function(){  	$('#my-dropdown6').append('').resetSS();  });              </pre>
  <p>If you add or remove options from the initial select element on the page, be sure to call the .resetSS() method on the select to update the Stylish Select replacement.</p>
</div>
<div id="update">
  <h2>Max-height for large lists</h2>
  <pre>$('#my-dropdown').sSelect({ddMaxHeight: '300px'});              </pre>
</div>
<div>
  <h2>Intelligent positioning</h2>
  <p>Stylish Select will always remain visible on the page.</p>
</div>
