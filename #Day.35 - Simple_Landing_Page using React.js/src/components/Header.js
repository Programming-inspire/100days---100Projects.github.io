import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Collapse, IconButton, Toolbar} from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root:{
     display: 'flex',
     justifyContent: 'center',
     alignItems : 'center',
     height: '100vh',
    fontFamily: 'Orbitron, sans-serif',
    
    },
    appbar:{
        background: 'rgb(0,0,0,0.5)',
      
    },
    icon:{
        color: '#fff',
        fontSize: '3rem'
    },
    appbarTitle:{
        color: '#fff',
        flexGrow: '1',
        fontSize: '3rem',
        
        
    },
    appbarWrapper:{
       width: '80%',
       margin: '0 auto',

    },
    colorText:{
        color:'#ff1a8c',

    },
    title:{
        color:'#fff',
        fontSize: '5rem',
        letterSpacing: '8px'
    },
    container:{
        textAlign: 'center',
    },
    goDown:{
        color: '#000',
        fontSize: '4rem',
        background: 'transparent',
        borderRadius: '50px',
        border:'1px solid #000'
    }
}));

export default function Header(){
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    useEffect(() =>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root} id="header">
           <AppBar className={classes.appbar} >
            <Toolbar className={classes.appbarWrapper}>
               <h1 className={classes.appbarTitle}>
                   My<span className={classes.colorText}>Pondy</span>
                   </h1>
               <IconButton>
                    <SortIcon className={classes.icon}/>
               </IconButton>
            </Toolbar>
           </AppBar>

           <Collapse in={checked}
           {...(checked ? { timeout: 1000 } : {})}
           collapsedHeight={25}>
           <div className={classes.container}>
               <h1 className={classes.title}>
                   Welcome to <br/>
                   My<span className={classes.colorText}>Pondy</span>
               </h1>
               <Scroll to="place-to-visit" smooth={true}>
               <IconButton>
              <ExpandMoreIcon className={classes.goDown}/>
               </IconButton>
               </Scroll>
           </div>
           </Collapse>
        </div>
    )
}
