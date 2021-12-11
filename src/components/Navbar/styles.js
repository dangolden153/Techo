import { makeStyles,alpha } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
    toolbar:{
        display:"flex",
        justifyContent:"space-between",
        padding:'0.5rem 4rem',
        zIndex:'2100',
        
        position:"sticky",
        top:0,
        backgroundColor:'#ffffff',
        [theme.breakpoints.down('sm')]:{
            padding: '1rem',
            width:'100%',
        }
       },
     
       logoLg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
         display:"block"
        }
       },
       logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")] : {
         display:"none"
        }
       },
       navImg:{
           width:'40px',
           height:'auto',
            [theme.breakpoints.down('sm')]:{
                width:'30px',
                height:'auto',
            },

       },
       search:{
        display:"flex",
        alignItems:"center",
        backgroundColor:alpha(theme.palette.common.black, 0.05), 
        '&:hover':{
         backgroundColor:alpha(theme.palette.common.black,0.05),
        } ,
        borderRadius:theme.shape.borderRadius,
        width:"50%",
        paddingLeft:"1rem",
          [theme.breakpoints.down("sm")] : {
         display:(props) => 
          (props.open ? "flex" : "none") ,
          width: "70%"
         
        },
     
       },
       input:{
        color:"black",
        marginLeft: theme.spacing(1),
     
       },
       cancel:{
          [theme.breakpoints.up('sm')]: {
            display:"none"
          } 
       },
       icons:{
        display:(props) => (props.open ? "none" : "flex"),
        alignItems:"center"
       },
       barge:{
        marginRight:theme.spacing(2),
        // backgroundColor:'#666666',
        color:'#666666'
       },
       searchButton:{
        marginRight:theme.spacing(1),
         [theme.breakpoints.up("sm")] :
         {
           display:"none",
         },
         color:'#666666',

       },
       searcher:{
           color:'#666666'
       },
       askBtn:{
           backgroundColor:'#100e86',
           color:'#ffffff',
           padding:'0.5rem 1rem' ,
           borderRadius:'15px',
           marginLeft:'1rem',
        '&:hover':{
            backgroundColor:'#100b76',
           color:'#ffffff', 

        },
        [theme.breakpoints.down('sm')]: {
            display:'none'
        },

       },

       navBtnContainer:{
           display:'flex',
        //    justifyContent:'space-between', 
        [theme.breakpoints.down('sm')]:{
            display:'none',

        }
       },
       mediaBtn:{
        marginRight:'1rem',
        color:'#444444',
        borderRadius:'0',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        
        fontWeight:(props) => 
        (props.activeBtn ? "400" : "700"),
        borderBottom:(props) => 
        (props.activeBtn ? "none": "2px solid #444444") 

       },
       homeBtn:{
           marginRight:'1rem',
           color:'#444444',
           borderRadius:'0',
           display:'flex',
           flexDirection:'column',
           alignItems:'center',
              justifyContent:'center',
           fontWeight:(props) => 
           (props.activeBtn ? "700" : "400"),
           borderBottom:(props) => 
           (props.activeBtn ? "2px solid #444444" : "none") 

       },
       mediaIcon:{
           display:'block !important',
           alignSelf:'center',
           textAlign:'center',
              fontSize:'1.2rem',
              flexGrow:'1',
              width:'100%',

       },
       homeIcon:{
              display:'block !important',
              width:'100%',
              marginRight:'1rem',
              flexGrow:1,
              fontSize:'1.2rem',
                alignSelf:'center',
                textAlign:'center',
         },
       navTitle:{
              display:'block',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'0.8rem',
       }




      
}));