class TempUtils {

    static toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }
      
    static toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

}

export default TempUtils;