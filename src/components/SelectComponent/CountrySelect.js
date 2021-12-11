import React,{useContext,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import AppContext from '../../context/app-context';




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
    const {country,setRegionData,regionData} =  useContext(AppContext);

    const [mapData, setMapData] = useState([]);
    useEffect(() => {
        if (country.length  ) {
            setMapData(country);
          
        
        }
    
    }, [country])

    const handleRegion = (id) => {
        setRegionData(country[id].regions)
    }

    const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    handleRegion(event.target.value)
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  console.log(regionData)
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
          <option aria-label="None" value="None" />
          {  mapData.map((item) => {
                const {id,flag,code, dial,regions} = item;
                return (
                    <option value={id} key={id} onClick={ () => handleRegion(id)}>{id}</option>
          
                              )

          } )}


        </Select>
      </FormControl>  
        </>
    )
}

export default CountrySelect
