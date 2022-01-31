import './Footer.css'


export default function Footer() {
  return (
    <div>
               <footer>
            <marquee width="100%" direction="left" height="70px">
                <h4>DIGITAL PRODUCT DESIGN<span>REMOTE WORK</span> UX DESIGN <span>DISTRIBUTED TEAMS</span> CREATIVITY <span>STRATEGY</span> SUSPENSE <span>GROWTH</span>
                </h4>
            </marquee>

            <div className='after-marquee'>
               <h1>Nordic Rose</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit architecto minima cum
                 <br/>
                  ipsam similique. Praesentium omnis illum commodi nesciunt, quaerat 
                  <br/>facere error quae quos iure explicabo vel cum dolorem quasi!</p>
               <div className='social-media'>
                  <a>Twitter</a>
                  <a>Linkedin</a>
                  <a>RSS</a>
               </div>
               <p className='copyright'>© 2012-2022.Nordic Rose Co.
               <br/>
                All Rights Reserved.
                </p>
              
            </div>
       </footer>
    </div>
  );
}
