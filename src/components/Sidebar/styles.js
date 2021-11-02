import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
  
    Sidebar:{
        display:(props) => (props.openSidebar ? "flex" : "none"),
        height:'100vh',
        position:'absolute',
        width:'50vw',
        top:'5rem',
        left:'0',
        zIndex:'2000',
        
         backgroundColor:'#f5f5f5',
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
      width:'50vw',
      height:'100%',
      // filter:'blur(1px)',
      zIndex:'1000',


     },
     sidebarItem:{
      zIndex:'1200',
         backgroundColor:'#f5f5f5',
         // backgroundColor:'#ffffff',
      width:'100%',
      height:'100%',
      position:'absolute',

     },
   



      
}));