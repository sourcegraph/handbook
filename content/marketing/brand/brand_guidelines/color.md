# Color

<style>
  .container {
    --width: 1300px;
  }
</style>

## Color palette

### Primary colors

Our colors express our commitment to being a welcoming, vibrant, and accessible brand. The palette is simple and flexible allowing for application across business segments while maintaining unity.

<style>
  .color-palette {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .color-palette .color {
    padding: 1rem;
    width: 8rem;
    height: 8rem;
    border-radius: 4px;
    position: relative;
    background: var(--color);
    border: 1px solid white;
  }
  .color-palette.interactive .color {
    cursor: pointer;
  }
  .color-palette .color-palette-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .color-palette .color-sm {
    width: 7rem;
    height: 7rem;
  }
  .color-palette .color-lg {
    width: 14rem;
    height: 14rem;
    display: flex;
    flex-direction: column;
  }
  .color-palette .color-lg > p {
    flex: 1 0 auto;
  }
  .color-palette .color:focus-within {
    box-shadow: 0 0 0 0.125rem var(--color);
    border-color: white;
  }
  .color-palette .color > :not(input) {
    cursor: auto;
  }
  .color-palette .color > h5:first-child {
    margin-top: 0;
  }
  .color-palette .color input[type="color"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    cursor: pointer;
    z-index: -1;
  }
  .color-palette .color input[type="color"]::-webkit-color-swatch {
    border: none;
  }
  .color-palette .color input[type="color"]::-moz-color-swatch {
    border: none;
  }
  .color-palette .color code {
    color: inherit;
  }
</style>

<div class="color-palette interactive">
  <div class="color" style="--color: var(--sg-sky-blue)">
    <h5>Sourcegraph Sky Blue</h5>
    <code>#00cbec</code>
  </div>
  <div class="color" style="--color: var(--sg-vivid-violet); color: white">
    <h5>Sourcegraph Vivid Violet</h5>
    <code>#a112ff</code>
  </div>
  <div class="color" style="--color: var(--sg-vermillion); color: white">
    <h5>Sourcegraph Vermillion</h5>
    <code>#ff5543</code>
  </div>
</div>

<script async defer>
  document.addEventListener('DOMContentLoaded', () => {
    // Open color picker when clicking colors
    for (const color of document.querySelectorAll('.color-palette.interactive .color')) {
      const value = color.querySelector('code').textContent
      const input = document.createElement('input')
      input.type = 'color'
      input.setAttribute('aria-readonly', 'true')
      input.value = value
      color.append(input)
      color.addEventListener('click', event => {
        if (window.getSelection().toString() === '') {
          input.click()
        }
      })
      // Ensure color picker is read-only
      input.addEventListener('input', event => {
        input.value = value
      })
    }
  })
</script>

### Secondary colors

Use supporting colors for graphic elements, illustrations, callouts, website UI elements, and more.

Primary logo colors have been marked. The secondary colors, along with shades and tints, were chosen to support and compliment these three core colors.

<div class="color-palette interactive">
  <div class="color-palette-column">
    <div class="color color-sm" style="--color: #fff2cf">
      <code>#fff2cf</code>
    </div>
    <div class="color color-sm" style="--color: var(--sg-lemon)">
      <code>#ffdb45</code>
      <small>Lemon</small>
    </div>
    <div class="color color-sm" style="--color: #ffc247">
      <code>#ffc247</code>
    </div>
    <div class="color color-sm" style="--color: #ff9933; color: white">
      <code>#ff9933</code>
    </div>
  </div>
  <div class="color-palette-column">
    <div class="color color-sm" style="--color: #ffc9c9">
      <code>#ffc9c9</code>
    </div>
    <div class="color color-sm" style="--color: var(--sg-vermillion); color: white">
      <code>#ff5543</code>
      <small>Vermillion</small>
      <div><img src="logo/versions/Sourcegraph_Logomark_WHT.svg" alt="Primary logo color" style="width: 1em; height: 1em"></div>
    </div>
    <div class="color color-sm" style="--color: #ed2e20; color: white">
      <code>#ed2e20</code>
    </div>
    <div class="color color-sm" style="--color: #c22626; color: white">
      <code>#c22626</code>
    </div>
  </div>
  <div class="color-palette-column">
    <div class="color color-sm" style="--color: #ffd1f2">
      <code>#ffd1f2</code>
    </div>
    <div class="color color-sm" style="--color: #d62687; color: white">
      <code>#d62687</code>
      <small>Cerise</small>
    </div>
    <div class="color color-sm" style="--color: #c4147d; color: white">
      <code>#c4147d</code>
    </div>
    <div class="color color-sm" style="--color: #9e1769; color: white">
      <code>#9e1769</code>
    </div>
  </div>
  <div class="color-palette-column">
    <div class="color color-sm" style="--color: #e8d1ff">
      <code>#e8d1ff</code>
    </div>
    <div class="color color-sm" style="--color: var(--sg-vivid-violet); color: white">
      <code>#a112ff</code>
      <small>Vivid Violet</small>
      <div><img src="logo/versions/Sourcegraph_Logomark_WHT.svg" alt="Primary logo color" style="width: 1em; height: 1em"></div>
    </div>
    <div class="color color-sm" style="--color: #820dde; color: white">
      <code>#820dde</code>
    </div>
    <div class="color color-sm" style="--color: #6112a3; color: white">
      <code>#6112a3</code>
    </div>
  </div>
  <div class="color-palette-column">
    <div class="color color-sm" style="--color: #bfbfff">
      <code>#bfbfff</code>
    </div>
    <div class="color color-sm" style="--color: #6b59ed; color: white">
      <code>#6b59ed</code>
      <small>Plum</small>
    </div>
    <div class="color color-sm" style="--color: #5033E1; color: white">
      <code>#5033E1</code>
      <small>Blurple</small>
    </div>
    <div class="color color-sm" style="--color: #3826cc; color: white">
      <code>#3826cc</code>
    </div>
  </div>
  <div class="color-palette-column">
    <div class="color color-sm" style="--color: #c7ffff">
      <code>#c7ffff</code>
    </div>
    <div class="color color-sm" style="--color: var(--sg-sky-blue)">
      <code>#00cbec</code>
      <small>Sky Blue</small>
      <div><img src="logo/versions/Sourcegraph_Logomark_WHT.svg" alt="Primary logo color" style="width: 1em; height: 1em"></div>
    </div>
    <div class="color color-sm" style="--color: #00a1c7; color: white">
      <code>#00a1c7</code>
    </div>
    <div class="color color-sm" style="--color: #005482; color: white">
      <code>#005482</code>
    </div>
  </div>
  <div class="color-palette-column">
    <div class="color color-sm" style="--color: #c4ffe8">
      <code>#c4ffe8</code>
    </div>
    <div class="color color-sm" style="--color: #8fedcf">
      <code>#8fedcf</code>
      <small>Mint</small>
    </div>
    <div class="color color-sm" style="--color: #17ab52; color: white">
      <code>#17ab52</code>
    </div>
    <div class="color color-sm" style="--color: #1f7d45; color: white">
      <code>#1f7d45</code>
    </div>
  </div>
</div>

### Colors for website UI

Use supporting colors for added tonality and awareness within website UI.

<div class="color-palette interactive" style="max-width: 54rem">
  <div class="color color-lg" style="--color: var(--sg-light-gray)">
    <h5>Sourcegraph Light Gray</h5>
    <p>Our light gray can add tonality to and create space within layouts.</p>
    <div><code>#f4f7fb</code></div>
  </div>
  <div class="color color-lg" style="--color: var(--sg-dark-gray); color: white">
    <h5>Sourcegraph Dark Gray</h5>
    <p>Our dark gray can add tonality and depth to layouts.</p>
    <div><code>#6c757d</code></div>
  </div>
  <div class="color color-lg" style="--color: black; color: white">
    <h5>Sourcegraph Space Black</h5>
    <p>Our black is a true black to provide maximum contrast.</p>
    <div><code>#000000</code></div>
  </div>
  <div class="color color-lg" style="--color: var(--sg-blurple); color: white">
    <h5>Sourcegraph Blurple</h5>
    <p>Use for button and CTA messages in website UI.</p>
    <div><code>#5033e1</code></div>
  </div>
  <div class="color color-lg" style="--color: var(--sg-action-green); color: white">
    <h5>Sourcegraph Action Green</h5>
    <p>Use for check marks and to signal positive messages in website UI.</p>
    <div><code>#17ab52</code></div>
  </div>
  <div class="color color-lg" style="--color: var(--sg-alert-red); color: white">
    <h5>Sourcegraph Alert Red</h5>
    <p>Use for alerts and to signal error messages in website UI.</p>
    <div><code>#ed2e20</code></div>
  </div>
</div>

## Color use

When creating a layout, the logo should be the primary object that informs the rest of the layout.
Once the logo is placed, add appropriate colors keeping in mind that our vibrant colors can quickly become visually overwhelming.

<object role="image" data="./color/color_use_1.svg" style="max-width: 22rem" alt="Example 1 of Sourcegraph color usage in marketing material"></object>
<object role="image" data="./color/color_use_2.svg" style="max-width: 22rem" alt="Example 2 of Sourcegraph color usage in marketing material"></object>

### Color use for website UI

When applying color to website UI elements use Sourcegraph Red, Green, and Blurple from our secondary palette. Dark gray can be used for text and icons.

<style>
  .inline-color-box {
    background: var(--color);
    width: 0.9em;
    height: 0.9em;
    display: inline-block;
    border-radius: 2px;
  }
</style>

#### <span class="inline-color-box middle" style="--color: var(--sg-blurple)"></span> <span class="middle">Sourcegraph Blurple</span>

Blurple is used for button elements and CTA text.

#### <span class="inline-color-box middle" style="--color: var(--sg-action-green)"></span> <span class="middle">Sourcegraph Action Green</span>

Green is used for check mark elements and to signal positive messages.

#### <span class="inline-color-box middle" style="--color: var(--sg-alert-red)"></span> <span class="middle">Sourcegraph Alert Red</span>

Red is used to signal serious alerts and error warnings.

### Color misuse

Color should be used consistently to communicate a cohesive system.<br>
Do not alter existing colors or add new colors to the palette. Use color to your advantage — and not to the detriment of a design.

<style>
  .color-misuse {
    font-size: smaller;
    font-weight: bold;
  }
  .color-misuse > figcaption {
    height: 4rem;
  }
  .color-misuse > img {
    border: 1px solid #aaa;
  }
</style>

<div style="display: grid; grid-template-columns: repeat(auto-fit, 16rem); gap: 1rem">
  <figure class="color-misuse">
    <figcaption>Do not add new colors to the brand palette.</figcaption>
    <object role="image" data="./color/color_misuse_new_colors.svg"></object>
  </figure>
  <figure class="color-misuse">
    <figcaption>Do not use too many colors in a design.</figcaption>
    <object role="image" data="./color/color_misuse_too_many_colors.svg"></object>
  </figure>
  <figure class="color-misuse">
    <figcaption>Do not set text in a color that does not meet ADA requirements.</figcaption>
    <object role="image" data="./color/color_misuse_ada.svg"></object>
  </figure>
  <figure class="color-misuse">
    <figcaption>Do not use Sourcegraph primary blue, or any other brand colors that don’t meet ADA compliance for text or UI elements.</figcaption>
    <object role="image" data="./color/color_misuse_ada_ui.svg"></object>
  </figure>
  <figure class="color-misuse">
    <figcaption>Do not saturate a design with color.</figcaption>
    <object role="image" data="./color/color_misuse_saturate.svg"></object>
  </figure>
  <figure class="color-misuse">
    <figcaption>Do not set the logo on a color or gradient that does not have sufficient contrast.</figcaption>
    <object role="image" data="./color/color_misuse_contrast.svg"></object>
  </figure>
</div>

### Gradients

Our gradients provide visual interest to backgrounds or container shapes. Gradients should be used sparingly.

<style>
  .color-gradient {
    display: flex;
    justify-content: space-between;
  }
  .color-gradient h5 {
    margin: 0;
  }
</style>
<div class="color-palette" style="max-width: 54rem">
  <div>
    <h4>Aquamarine</h4>
    <div class="color color-lg color-gradient" style="--color: var(--sg-gradient-aquamarine); color: white">
      <div>
        <h5>Sourcegraph Sky Blue</h5>
        <div><code>#00cbec</code></div>
      </div>
      <div>
        <h5>Sourcegraph Blurple</h5>
        <div><code>#5033e1</code></div>
      </div>
    </div>
  </div>
  <div>
    <h4>Infrared</h4>
    <div class="color color-lg color-gradient" style="--color: var(--sg-gradient-infrared); color: white">
      <div>
        <h5>Sourcegraph Vivid Violet</h5>
        <div><code>#a112ff</code></div>
      </div>
      <div>
        <h5>Sourcegraph Vermilion</h5>
        <div><code>#ff5543</code></div>
      </div>
    </div>
  </div>
  <div>
    <h4>Aurora</h4>
    <div class="color color-lg color-gradient" style="--color: var(--sg-gradient-aurora); color: white">
      <div>
        <h5>Sourcegraph Sky Blue</h5>
        <div><code>#00cbec</code></div>
      </div>
      <div>
        <h5>Sourcegraph Vivid Violet</h5>
        <div><code>#a112ff</code></div>
      </div>
    </div>
  </div>
  <div>
    <h4>Mars</h4>
    <div class="color color-lg color-gradient" style="--color: var(--sg-gradient-mars)">
      <div>
        <h5>Sourcegraph Red Mist</h5>
        <div><code>#ffc9c9</code></div>
      </div>
      <div>
        <h5>Sourcegraph Violet Mist</h5>
        <div><code>#e8d1ff</code></div>
      </div>
    </div>
  </div>
  <div>
    <h4>Saturn</h4>
    <div class="color color-lg color-gradient" style="--color: var(--sg-gradient-saturn)">
      <div>
        <h5>Sourcegraph Violet Mist</h5>
        <div><code>#e8d1ff</code></div>
      </div>
      <div>
        <h5>Sourcegraph Blue Mist</h5>
        <div><code>#c7ffff</code></div>
      </div>
    </div>
  </div>
  <div>
    <h4>Venus</h4>
    <div class="color color-lg color-gradient" style="--color: var(--sg-gradient-venus)">
      <div>
        <h5>Sourcegraph Sky Blue</h5>
        <div><code>#c7ffff</code></div>
      </div>
      <div>
        <h5>Sourcegraph Vivid Violet</h5>
        <div><code>#c4ffe8</code></div>
      </div>
    </div>
  </div>
</div>

### Gradient use

See [PDF](https://sourcegraphstatic.com/Sourcegraph_Brand_Guidelines.pdf#page=32)

### Gradient misuse

See [PDF](https://sourcegraphstatic.com/Sourcegraph_Brand_Guidelines.pdf#page=33)

### Accessibility

See [PDF](https://sourcegraphstatic.com/Sourcegraph_Brand_Guidelines.pdf#page=34)
