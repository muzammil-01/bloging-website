import './About.css'


export default function About() {
  return (
    <>
      <div className='banner'>
        <h5>ABOUT</h5>
      </div>
      <div className="content-1">
        <h2>How this file can be used</h2>
        <p className='left-border'>
          Feel free to use this file in any way you want, you can edit a copy of this file as much as you<br />
          want for non-commercial or commercial purposes. It’s not necessary, but if you want, you<br />
          can ping me at @mikamatikainen on Twitter when using this file. Would be just nice to see<br />
          how this evolves<br />
          Images: Copyright © Unsplash or Mika Matikainen.</p>
      </div>

      <div className="content-2">
        <h2>A note about typefaces</h2>
        <p className='left-border'>
          This file is using platform-native typefaces for iOS & macOS, designed by Apple.<br />
          To make texts editable, you can download the typefaces at https://developer.apple.com/fonts/.</p>
      </div>

      <div className="content-3">
        <h2>Fonts used on the live site</h2>
        <p className='left-border'>
          Just for reference or if you’re interested, I list here the typefaces I’m using in on<br />
          the live site at https://www.nordicrose.net. If you’d like to use them in your own<br />
          project, I added links for you as well to make it easier to purchase the required<br />
          license..

          <h2>GTF Chapter</h2>
          <span>
            – used in the logo as a vector outline<br />
            – by Good Type Foundry (https://www.goodtypefoundry.com/chapter)
          </span>


          <h2>Mackay Bold</h2>
          <span>
            – large headlines<br />
            – by Rene Gieder (https://www.myfonts.com/fonts/rene-bieder/mackay/)
          </span>


          <h2>Harriet Text</h2>
          <span>
            – body copy<br />
            – by Okay Type (https://okaytype.com/typefaces/harriet)
          </span>


          <h2>Basis Grotesque Pro</h2>
          <span>
            – UI elements, some subtitles and some body copy<br />
            – by Colophon Foundry (https://www.colophon-foundry.org/typefaces/basis-grotesque/)
          </span>


          <h2>NOKIA CELLPHONE FC</h2>
          <span>
            – some playful elements at some point, maybe<br />
            – by Zeh Fernando, available for free at Dafont (https://www.dafont.com/nokia-cellphone.font)
          </span>
        </p>

      </div>
    </>
  )
}