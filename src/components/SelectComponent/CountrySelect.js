import React,{useContext,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import AppContext from '../../context/app-context';


const yoga = [
    {
        id:1,
        code:'234',
        flag:'pop',
        dail:'afr',
},
    {
        id:2,
        code:'345',
        flag:'tyu',
        dail:'wewe',
},
    {
        id:3,
        code:'232',
        flag:'pope',
        dail:'h3h',
},
    {
        id:4,
        code:'4545',
        flag:'3434',
        dail:'223',
},
]
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const CountrySelect = () => {
    const {country} =  useContext(AppContext);

    const [mapData, setMapData] = useState(yoga);
    useEffect(() => {
        if (country.length  ) {
            setMapData(country);
        
        }
    
    }, [country])
    
    const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  
    return (
        <>
            <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {mapData.map((item) => {
                const {id,flag,code, dail} = item;
                return (
                    <option value={flag} key={id}>{dail}</option>
          
                              )

          } )}

           {/* {country? ( country.map((item) => {
                const {id,flag,code, dail} = item;
                    return (
          <option value={flag} key={id}>{dail}</option>

                    )
            }) ) :(yoga.map((item) => {
                const {id,flag,code, dail} = item;
                return (
                    <option value={flag} key={id}>{dail}</option>
          
                              )

            })) } */}



          {/* <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </Select>
      </FormControl>  
        </>
    )
}

export default CountrySelect
