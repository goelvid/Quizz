import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'

const Calculator = () => {
  const [result,setResult]= useState();
  const ontouch=(button)=>{
setResult(result+button)
  }
  const handleresult=()=>{
setResult(eval(result))
  }
  const clear=()=>{
    setResult('')
  }
  return (
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:"black"}}>
      <Text style={{color:"white",fontWeight:"bold",marginLeft:'auto',marginRight:20,marginTop:'auto',marginBottom:20,fontSize:50}}>{result}</Text>
      </View>
      <View style={{flex:1,backgroundColor:"black",borderTopWidth:1,borderTopColor:'white',}}>
        <View style={{flexDirection:"row",marginBottom:10}}>
        <TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>clear()}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>C</Text>
</TouchableOpacity>  
{/* <TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%'}} onPress={()=>ontouch('%')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>%</Text>
</TouchableOpacity>  */}
</View>
<View style={{flexDirection:"row"}}>
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('1')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>1</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('2')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>2</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('3')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>3</Text>
</TouchableOpacity> 
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%'}} onPress={()=>ontouch('+')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>+</Text>
</TouchableOpacity> 
</View>
<View style={{flexDirection:"row",marginTop:20}}>
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('4')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>4</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('5')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>5</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('6')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>6</Text>
</TouchableOpacity> 
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%'}} onPress={()=>ontouch('-')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>-</Text>
</TouchableOpacity> 
</View>
<View style={{flexDirection:"row",marginTop:20}}>
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('7')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>7</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('8')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>8</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('9')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>9</Text>
</TouchableOpacity> 
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%'}} onPress={()=>ontouch('*')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>X</Text>
</TouchableOpacity> 
</View>
<View style={{flexDirection:"row",marginTop:20}}>
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('0')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>0</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('.')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>.</Text>
</TouchableOpacity>  
<TouchableOpacity style={{borderRadius:50,backgroundColor:"grey",width:"15%",height:'99%',marginRight:45}} onPress={()=>ontouch('/')}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>/</Text>
</TouchableOpacity> 
<TouchableOpacity style={{borderRadius:50,backgroundColor:"orange",width:"15%",height:'99%'}} onPress={()=>handleresult()}>
<Text style={{color:"white",textAlign:'center',margin:10,fontSize:25}}>=</Text>
</TouchableOpacity>  
</View>
      </View>
    </View>
  )
}

export default Calculator