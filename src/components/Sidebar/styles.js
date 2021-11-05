import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
    Sidebar:{
        display:(props) => (props.openSidebar ? "flex" : "none"),
        height:'85vh',
        position:'absolute',
        width:'60vw',
        top:'4rem',
        left:'0',
        zIndex:'200',
        paddingTop:'1rem',
        
        
         backgroundColor:'#ffffff',
      background:'transparent',
        animationName: '$blinker',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount: '1',
        transition: 'all 1000ms',
        transform:'translateX(-100%)',
        [theme.breakpoints.down('md')]:{
            transform:'translateX(0)'
        },

        
       },
       '@keyframes blinker': {
        from: {
           opacity: 0
        },
        to: {
           opacity: 1
        },
     },
     sidebarContent:{
      width:'100vw',
      height:'100%',
      // filter:'blur(1px)',
      zIndex:'1000',
      padding:'0.5rem',



     },
     sidebarItem:{
      zIndex:'1200',
        
      width:'100%',
      height:'100%',
      position:'absolute',

     },
   listItemContainer:{
      padding:'1rem'
   },
   listItem:{
      listStyle:'none',

   },
   linkItem:{
      display:'flex',
      listStyle:'none',
      // justifyContent:'space-between',
      alignItem:'center',
      marginBottom:'1rem',
      textDecoration:'none',

   },
   linkText:{
         textDecoration:'none',
         color:'#474747',
         fontSize:'1.1rem',


   },
   linkImg:{
         width:'20px',
         height:'20px',
         marginRight:'1rem',
   
      },

//
 


      
}));