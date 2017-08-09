import React, { Component } from 'react';
import './App.css'; 

class App extends Component {
  render() {
	return (
	       <SubTabs/>
		  );
      }
 }
class SubTabs extends Component {
  constructor(props){
	 super(props);
		 this.state={
		    tabs:[
				{name:'SALE',id:1},
				{name:'BRANDS',id:2},
				{name:'MENS',id:3},
				{name:'WOMENS',id:4},
				{name:'LOOKBOOKS',id:5}
			   ],
	   dditems:[{name:'arcade',id:1},
				{name:'baserange',id:2},
				{name:'izola',id:3},
				{name:'incase',id:4},
				{name:'dickies',id:5},
				{name:'bata bullets',id:6},
				{name:'bing bang',id:7} 
		       ],
         image:[{image:'capimage1.jpg',id:1,name:'capimage1'},
			    {image:'capimage2.jpg',id:2,name:'capimage2'},
			    {image:'capimage3.jpg',id:3,name:'capimage3'},
			    {image:'capimage4.jpg',id:4,name:'capimage4'}
               ], 
	   subtabs:[{name:'Description',id:1},
			    {name:'FREE SHIPPING',id:2},
			    {name:'Easy Returns',id:3},
			    {name:'Payment',id:4},
			    {name:'Questions?',id:5}
               ],
  scrollimages:[{image:'dress1.jpg',id:1,name:'dress1'},
                {image:'dress2.jpg',id:2,name:'dress2'},
                {image:'dress3.jpg',id:3,name:'dress3'},
                {image:'dress4.jpg',id:4,name:'dress4'},
                {image:'dress5.jpg',id:5,name:'dress5'},
                {image:'dress6.jpg',id:6,name:'dress6'},
                {image:'dress7.jpg',id:7,name:'dress7'},
                {image:'dress8.jpg',id:9,name:'dress8'},
                {image:'dress10.jpg',id:10,name:'dress10'},
                {image:'dress11.jpg',id:11,name:'dress11'},
                {image:'dress12.jpg',id:12,name:'dress12'},
                {image:'dress13.jpg',id:13,name:'dress13'},
                {image:'dress14.jpg',id:14,name:'dress14'},
                {image:'dress15.jpg',id:15,name:'dress15'},
                {image:'dress16.jpg',id:16,name:'dress16'},
                {image:'dress17.jpg',id:17,name:'dress17'},
                {image:'dress18.jpg',id:18,name:'dress18'},
                {image:'dress19.jpg',id:19,name:'dress19'},
                {image:'dress20.jpg',id:20,name:'dress20'},
                {image:'dress21.jpg',id:21,name:'dress21'},
                {image:'dress22.jpg',id:22,name:'dress22'},
                {image:'dress23.jpg',id:23,name:'dress23'},
                {image:'dress24.jpg',id:24,name:'dress24'},
                {image:'shirt1.jpg',id:25,name:'shirt1'},
                {image:'shirt2.jpg',id:26,name:'shirt2'},
                {image:'shirt3.jpg',id:27,name:'shirt3'},
                {image:'shirt4.jpg',id:28,name:'shirt4'},
                {image:'shirt5.jpg',id:29,name:'shirt5'},
                {image:'socks.jpg',id:30,name:'socks'},
                {image:'socks2.jpg',id:31,name:'socks2'},
                {image:'top1.jpg',id:32,name:'top1'},
                {image:'top2.jpg',id:32,name:'top2'},
                {image:'top3.jpg',id:32,name:'top3'},
                {image:'top4.jpg',id:32,name:'top4'},
                {image:'top5.jpg',id:32,name:'top5'},
                {image:'top6.jpg',id:32,name:'top6'},
                {image:'top7.jpg',id:32,name:'top7'},
                {image:'top8.jpg',id:33,name:'top8'},
                {image:'top9.jpg',id:34,name:'top9'},
                {image:'top10.jpg',id:35,name:'top10'}
              ],                  
			     search:'',
				 mainTabid:'',
				 mainTabactive:'',
				 tabActive:'',
				 tabid:''   ,  
				 leave: '',
				 imgactive:''
			}
				 this.mainTab=this.mainTab.bind(this);
				 this.leaveTab=this.leaveTab.bind(this);
				 this.handleChange=this.handleChange.bind(this); 
				 this.tabClick=this.tabClick.bind(this);  
				 this.imgClick=this.imgClick.bind(this);

	 }
	   componentDidMount()
	   {
	   	 this.tabClick(1,'Description');
	   	 this.imgClick(1,'capimage1');
	   }
	   leaveTab(event,id)
	   {
	   	 this.setState({leave:id});
	   }
	   mainTab(id)
	   {
	     this.setState({mainTabid:id,leave:id}); 	    
	   }
	   imgClick(id,name)
	   {
	     this.setState({imgactive:id,imgname:name});
	   }
	   handleChange()
	   {
		 this.setState({search:this.state.search});
	   }
	   tabClick(id)
	   {
	   	 this.setState({tabActive:id,tabid:id});
	   }

   render(){
		var subtabs=this.state.tabs.map(function(tb,index){
			return(
			   <li key={index} onMouseEnter={() => {this.mainTab(tb.id)}} id="list"><a className={this.state.mainTabid===tb.id ? 'activetab' :''} >{tb.name}</a></li>
		    )
		}.bind(this));
		var dds=this.state.dditems.map(function(dd,index){
			return(
			  <option key={index}>{dd.name}</option>
			)
		});
		var i =this.state.image.map(function(img,index){
           return(
           	    <ul id="small" key={index}>
                  <li>
                    <img src={require('./assets/images/'+img.image)}  id="img-circle" alt={img.name} onClick={() => {this.imgClick(img.id)}} 
                    className={this.state.imgactive===img.id ? 'hide' :'active'} width="40" height="40"/>
                  </li>
                </ul>
               )    
		}.bind(this));
	   var subtbs=this.state.subtabs.map(function(subtb,index){
           return(
             <li key={index} id="sublist" className={this.state.tabActive === subtb.id ? 'active' : ''}>
             <a onClick={() => {this.tabClick(subtb.id)}}>{subtb.name}</a></li>
           )
	   }.bind(this))
	   var dresses=this.state.scrollimages.map(function(dress,index){
           return(
              <img key={index} src={require('./assets/images/'+dress.image)} alt={dress.name} width="250" height="250"/>
           	)
	   }); 	
	   return (          
		 <div className="container-fluid">   
			<div className="navbar navbar-fixed-top" id="top">
			  <p>~END OF SEASON SALE NOW ON! UP TP 60% OFF SELECTED STOCK ~</p>             
			</div>	
			  <ul className="breadcrumb" id="secondnav" >
				 <li id="newli">NEW</li>
				 {subtabs}
				 <li>
				   <select id="select">
					  {dds}
				   </select>
                 </li>
			  </ul>	 
		    <div className={this.state.mainTabid !== this.state.leave ? 'hide' :'active' }>
			 <div id="hovers" className={this.state.mainTabid === 1 ? 'active' :'hide'} onMouseLeave={this.leaveTab}> 
                 <span>Footware Sale</span><br/>
                  <span>Mens Sale</span>
                  <p>20% - 40% Off</p>
                  <p>50% - 70% Off</p>
                  <p>Under $100</p>
                  <span>Womens Sale</span>
                  <p>20% - 40% Off</p>
                  <p>50% - 70% Off</p>
                  <p>Under $100</p> 
                  <span>Sale Sunnies</span><br/>
                  <span>Sale Jewels</span><br/>
                  <span>Sale Accs</span>
             </div> 
             <div id="brands" className={this.state.mainTabid === 2 ? 'active' :'hide'} onMouseLeave={this.leaveTab}>
              <div className="row">
                <div className="col-lg-3 col-lg"> 
                   <p>Brain Dead</p><p>Champion</p><p>Colab</p><p>Good Thing</p><p>Good as Gold</p><p>Hansel from Basel</p><p>Henrik Vibskov</p><p>Herschel Supply Co
                   </p><p>Izola</p><p>Jasmin Sparrow</p><p>Jason Markk</p><p>Kaibosh</p><p>Kowtow</p><p>Lazy Oaf</p><p>Levi's</p><p>Maharishi
                   </p><p> Meadowlark</p><p>MyDeerFox</p><p>Nobody Denim</p>
                </div> 
                <div className="col-lg-3 col-lg">
                   <p>Norse</p><p>Projects</p><p>Odeme</p><p>Parra</p><p>Patagonia</p><p>Permanent</p><p>Vacation</p><p>Pleasures</p><p>Perks and Mini 
                   </p><p>Reality</p><p>Studio</p><p>Rollas Royal</p><p>Republiq</p><p>Puebco</p><p>Stan Ray</p><p>Status Anxiety</p><p>Taikan Everything
                   </p><p>The Fifth</p><p> TID Watches</p><p>The Horse</p><p>Wood Wood</p><p>Wos</p>
                </div>
                <div className="col-lg-3 col-lg">
                   <p>Yu Mei</p><span>FOOTWEAR</span><p>Adidas Originals</p><p>Bata Bullets</p><p>Intentionally Blank</p><p>Nike</p><p>New Balance
                   </p><p>People Footwear</p><p>Puma</p><p>Reebok</p><p>Vans</p><p>Veja</p><span>ALL BRANDS</span>    
               </div>
              </div>  
            </div> 
            <div id='men' className={this.state.mainTabid === 3 ? 'active' :'hide'} onMouseLeave={this.leaveTab}>
              <div className="row">
                <div className="col-lg-3 col-lg"> 
	               <span>New</span><br/><span>Exclusives</span><br/><span>Footwear</span><br/><span>Tops</span><br/><p>T-shirts</p><p>LongSleeveT-Shirts</p><p>Shirts</p><p>Crews / Hoods</p><p>
					Outerwear</p><span>Bottoms</span><p>shorts</p><p>Pants</p><p>Denim</p><span>Accessories</span><p>Bags</p><p>Wallets</p><p>Cases & Sleeves</p><p>
				   	Watches</p><p>Sunglasses</p>
				</div>
                <div className="col-lg-3 col-lg">
                   <p>Hats</p><p>Socks & Undies</p><p>Belts</p><span>Jewellery</span><span>Goods</span><p>Grooming Products</p><p>Homeware</p>
				   <p>Magazines</p><span>Stuff</span><p>Kids</p><p>Knives</p><span>Gifts</span><br/><span>Sale</span><br/><span>Last Pairs</span> 
                </div>
             </div>
          </div>
          <div id="women" className={this.state.mainTabid === 4 ? 'active' :'hide'} onMouseLeave ={this.leaveTab}>
            <div className="row">
               <div className="col-lg-3 col-lg">
                  <span>New</span><br/><span>Exclusives</span><br/><span>Footwear</span><br/><span>Tops</span><br/><p>T-shirts</p><p>Shirts</p><p>Sweaters</p><p>Knitwear</p><p>Outerwear</p><p>
                   Dresses</p><span>Bottoms</span><p>Shorts / Skirts</p><p>Pants</p><p>Jumpsuits</p><p>Denim</p><p>Underwear</p><span>Accessories</span><p>Bags & Wallets</p>
                   <p>Cases&Sleeves</p>
               </div>
               <div className="col-lg-3 col-lg">
                  <p>Sunglasses</p><p>Hats</p><p>Socks & Tights</p><p>Watches</p><span>Jewellery</span><p>Rings</p><p>Earrings</p><p>Bracelets</p><p>Necklaces</p><p>
                   Goods</p><p>Hair & Body</p><p>Homeware</p><p>Magazines</p><p>Stuff</p><p>Kids</p><p>Knives</p><span>Gifts</span><br/><span>Sale</span><br/><span>Last Pairs</span> 
               </div>
            </div>
          </div>
        </div> 
		 <div className="container-fluid" id="body">	
            <input type="text" id="inputsearch" value={this.state.search} placeholder="search" onChange={this.handleChange}/>
			<div className="panel">
				<div className="row">	
			        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                       <div className={this.state.imgactive  === 1 ? 'active' :'hide'}>	
                    	   <img src={require('./assets/images/capimage1.jpg')}  alt='capimage1' width="400" height="640"/>
			           </div>
			           <div className={this.state.imgactive  === 2 ? 'active' :'hide'}>
			               <img src={require('./assets/images/capimage2.jpg')}  alt='capimage2' width="400" height="640"/> 
			           </div>
			           <div className={this.state.imgactive  === 3 ? 'active' :'hide'}>
			               <img src={require('./assets/images/capimage3.jpg')}  alt='capimage3' width="400" height="640"/>
			           </div>
			           <div className={this.state.imgactive  === 4 ? 'active' :'hide'}>
			                <img src={require('./assets/images/capimage4.jpg')}  alt='capimage4' width="400" height="640"/>
			           </div>
			           <div id="smallimage">
			             {i}
			           </div>
			        </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
					   <p id="new">NEW</p><p id='heading'>X HELLO KITTY BOW</p>
					   <p id="heading">TIE CAP - WHITE</p>
					   <p id="last">from LAZY OAF</p>
					   <table id="block"> 
						 <tr>
							<th>
							   <p id="number">$69.00<sup>nzd</sup></p>
							</th>
							<th id="second">
							   <span id="txt">Select size.<i className="glyphicon glyphicon-question-sign"></i></span>
							   <select><option>ONE SIZE</option></select>
							</th>
							<th id="third">
							  <button id="bt">ADD TO CART</button>
						    </th>
						 </tr>
					   </table>
					   <span>
						  <p>or 6 payments from $11.50 &nbsp;<img src={require('./assets/images/icon.png')} alt="symbol"/>&nbsp; <u>What's this?</u></p>
					   </span>
					   <div className="panel" id="panel"> 
					     <div id="block2">
						    <ul className="nav nav-tabs nav-justify ">
							 {subtbs}
					    	</ul>
					    </div>
					  <div id="description" className={this.state.tabActive === 1 ? 'active' : 'hide'}>
					      <button id="size">SIZE GONE? HIT THIS</button> 
					      <p>Lazy Oaf X Hello Kitty Bow Tie Cap - white</p><br/>
					      <p>Fit: One size fits all</p>
                          <p>Material: 100% cotton</p>
                          <p>- 6 panel cap</p>
                          <p>- Embroidered Hello Kitty detail on front</p>
                          <p>- Red ribbon fastening at back</p>
                          <p>- Blue button on top</p>
					  </div>
					  <div id="freeshipping" className={this.state.tabActive === 2 ? 'active' :'hide'}>
                         <p>New Zealand: Spend over $99 NZD and we'll ship free. Orders under $99 will
                          be $5NZD.</p>
					     <p>Australia: Spend over $99 NZD and it's free. Orders under $99 will cost 
					     $15NZD to ship</p>
					     <p>Most of the Rest the World: Spend over $299 NZD and shipping worldwide is 
					     free, otherwise it’ll cost you around $30NZD (certain countries may cost a little 
					     extra, but we will contact you in this case).</p>
					     <p><u>More information on shipping/express shipping</u></p>   
					  </div>
					  <div id="easyreturn" className={this.state.tabActive === 3 ? 'active' : 'hide'}>
                         <p>IF YOU DON’T LIKE IT, JUST SEND IT BACK!**</p>
                         <p>There's no need to be nervous, if you find that:</p>
                         <ul type='none'>
                            <li>It doesn’t fit</li>
                            <li>It isn’t as you imagined, or</li>
                            <li>You were drunk when you ordered it</li>
                            <li>You can always send it back and we will swap it or refund you no problem!! Just 
                               get in touch within 7days and make sure it’s still brand new/unworn, tags attached.</li>
                          </ul>  
                         <p><u>More information on shipping/returns</u></p> 
                         <p>**Does not apply to sale items, faulty items and special/back ordered items.</p>
				      </div>
				      <div id="payment" className={this.state.tabActive === 4 ? 'active' : 'hide'}>
				         <ul type="none">
				          <li>We accept all major credit cards through eWay or Paypal and our NZ homies 
				              can also pay by POLi or bank deposit. Either way you will need to make
				              payment at the time of purchase. 
				          </li>
				        </ul>
				      </div>
				     <div id="question" className={this.state.tabActive ===5 ? 'active' : 'hide'}>
                        <p>Still unsure? Get in touch by filling out the details below and we will get back to you asap!!</p> 
                        <hr/>
                        <label> 
                           EMAIL ADDRESS:<br/>
                           <input type="email" size="45"/>
                        </label>    
                        <hr/>
                        <label>
                           QUESTIONS:<br/>
                            <textarea cols='50' rows='7'></textarea>
                        </label>
                        <hr/>
				        <button className="btn btn-xs" id="btn">SEND</button>
                     </div>
				  </div>
				  <div id="bottom">
				     <div id="buttons">SHOW YOUR MATES:&nbsp;<button className="btn btn-xs btn-primary"><i className="glyphicon glyphicon-thumbs-up"></i><b>like</b></button>
                         &nbsp;&nbsp;&nbsp;<button className="btn btn-xs" id="tumblr"><b>tumblr.</b><i className="glyphicon glyphicon-plus"></i></button>   
				         &nbsp;<button id="follow">Follow on Nuji</button>&nbsp;&nbsp;<button className="btn btn-xs" id="pin"><b>pin it</b></button>
				     </div>
				     <div className="well" id="scrolls">
				      <p>you may also like this:</p>
				       {dresses}
				     </div> 
				 </div>  
			   </div> 
			</div>
		  </div>
		</div> 
	  </div>  	
	 );
  }
}
export default App;
