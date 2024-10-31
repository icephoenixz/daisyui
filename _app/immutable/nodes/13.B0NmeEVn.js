import{a as $,t as x,b as s,s as n,f as I}from"../chunks/disclose-version.CEbLymSa.js";import{h as a}from"../chunks/html.CRu8H1xh.js";import{l as S,s as T}from"../chunks/props.CBRLfZBG.js";import{M as U}from"../chunks/mdsvex-blog.yxS7kVYA.js";var C=x('<p>daisyUI 5 alpha is in development [<a href="https://github.com/saadeghi/daisyui/tree/v5" rel="nofollow" target="_blank">v5 branch</a>]</p> <ul><li>There’s no docs or changelog yet</li> <li>Some components are not ready</li> <li>There are many bugs and any alpha version may break things</li> <li>If you use it in production a baby dolphin will die</li></ul> <h2 id="try-it"><a aria-hidden="true" tabindex="-1" href="#try-it"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Try it</h2> <ol><li>You can try this <a href="https://play.tailwindcss.com/iOzVcc4McC?file=css" rel="nofollow" target="_blank">Tailwind Play link</a> which includes a big dump of components</li> <li>Or you can try the new <a href="https://cdn.jsdelivr.net/npm/daisyui@alpha/full.css" rel="nofollow" target="_blank">full.css</a> or the new <a href="https://cdn.jsdelivr.net/npm/daisyui@alpha/chunks.css" rel="nofollow" target="_blank">chunks.css</a>!</li> <li>Or if you’re brave enough to try Tailwind CSS 4 alpha + daisyUI 5 alpha, <a href="https://tailwindcss.com/blog/tailwindcss-v4-alpha" rel="nofollow" target="_blank">Install Tailwind CSS 4 <code>alpha</code></a> and then install daisyUI <code>alpha</code></li></ol> <pre class="language-undefined"><!></pre> <p>Your CSS file:</p> <pre class="language-css"><!></pre> <p>You can use options</p> <pre class="language-css"><!></pre> <p>You can add custom themes</p> <pre class="language-css"><!></pre> <h2 id="feedbacks-needed"><a aria-hidden="true" tabindex="-1" href="#feedbacks-needed"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Feedbacks needed</h2> <p>Here’s how you can help:</p> <ul><li><strong>Feedback</strong>: What do you like/dislike about v5 so far?</li> <li><strong>Suggestions</strong>: Any features or improvements you’d like to see in the stable version of daisyUI 5?</li> <li><strong>Bug Reports</strong>: Found a new bug in v5 alpha? Let me know.</li></ul> <p>Put your feedbacks in the comments <a href="https://github.com/saadeghi/daisyui/discussions/3246" rel="nofollow" target="_blank">here in the <strong>GitHub Discussion</strong></a></p> <p>Thank you for your help! 🙏</p>',1);const P={title:"daisyUI 5 alpha is in development",desc:"daisyUI 5 alpha is in development and I'm looking for your suggestions, feedbacks and ideas to make it better.",published:!0,date:"2024-10-21T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/daisyui-alpha.webp",tags:["News"]};function z(c,l){const u=S(l,["children","$$slots","$$events","$$legacy"]);U(c,T(()=>u,P,{children:(i,Y)=>{var t=C(),r=I(t),k=n(n(r,!0)),d=n(n(k,!0)),h=n(n(d,!0)),p=n(n(h,!0)),y=s(p);a(y,()=>'<code class="language-undefined">npm i -D daisyui@alpha</code>');var g=n(n(p,!0)),o=n(n(g,!0)),f=s(o);a(f,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"tailwindcss"</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@plugin</span> <span class="token string">"daisyui"</span><span class="token punctuation">;</span></span></code>`);var m=n(n(o,!0)),e=n(n(m,!0)),b=s(e);a(b,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@plugin</span> <span class="token string">"daisyui"</span></span> <span class="token punctuation">&#123;</span>
  <span class="token property">logs</span><span class="token punctuation">:</span> true<span class="token punctuation">;</span>
  <span class="token property">root</span><span class="token punctuation">:</span> <span class="token string">":root"</span><span class="token punctuation">;</span>
  <span class="token property">include</span><span class="token punctuation">:</span> button<span class="token punctuation">,</span> badge<span class="token punctuation">,</span> input<span class="token punctuation">,</span> card<span class="token punctuation">;</span>
  <span class="token property">exclude</span><span class="token punctuation">:</span> badge<span class="token punctuation">;</span>
  <span class="token property">themes</span><span class="token punctuation">:</span> light --default<span class="token punctuation">,</span> dark --prefersdark<span class="token punctuation">,</span> cupcake<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`);var v=n(n(e,!0)),_=n(n(v,!0)),w=s(_);a(w,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@plugin</span> <span class="token string">"daisyui/theme"</span></span> <span class="token punctuation">&#123;</span>
  <span class="token property">name</span><span class="token punctuation">:</span> <span class="token string">"my-theme"</span><span class="token punctuation">;</span>
  <span class="token property">default</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span>
  <span class="token property">prefersdark</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span>
  <span class="token property">color-scheme</span><span class="token punctuation">:</span> light<span class="token punctuation">;</span>

  <span class="token property">--color-base-100</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.02 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-base-200</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>95% 0.03 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-base-300</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>92% 0.04 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-base-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>20% 0.05 240<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-primary</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>55% 0.3 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-primary-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.01 240<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-secondary</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>70% 0.25 200<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-secondary-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.01 200<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-accent</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>65% 0.25 160<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-accent-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.01 160<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-neutral</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>50% 0.05 240<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-neutral-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.01 240<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-info</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>70% 0.2 220<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-info-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.01 220<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-success</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>65% 0.25 140<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-success-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.01 140<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-warning</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>80% 0.25 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-warning-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>20% 0.05 80<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--color-error</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>65% 0.3 30<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--color-error-content</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span>98% 0.01 30<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token property">--radius-badge</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>
  <span class="token property">--radius-btn</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>
  <span class="token property">--radius-box</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>
  <span class="token property">--spacing-button-border</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">--spacing-tab-border</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),$(i,t)},$$slots:{default:!0},$$legacy:!0}))}export{z as component};
