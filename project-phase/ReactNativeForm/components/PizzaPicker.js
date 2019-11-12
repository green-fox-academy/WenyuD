import React, { Component } from 'react';
import { View, Text, Picker, CheckBox, Button, TextInput } from 'react-native';

const toppings = ['Onion', 'Bacon', 'Mushroom'];
const cutOptions = ['Cut', 'Don\'t Cut'];

class PizzaPicker extends Component {
   constructor() {
      super();
      this.state = {
         base: '',
         topping: [],
         cut: '',
         comment: 'None',
         receipt: ''
      }
      this.submitReceipt = this.submitReceipt.bind(this);
   }
   updateBase = (baseSelection) => {
      this.setState({ 
         base: baseSelection
      })
   }
   updateToppingSelection(selection) {
      if (this.state.topping.includes(selection)) {
         this.setState({
            topping: this.state.topping.filter(t => t != selection)
         })
      } else {
         this.setState({
            topping: [...this.state.topping, selection]
         })
      }
   }
   updateCutSelection(selection) {
      if (this.state.cut != selection) {
         this.setState({
            cut: selection
         })
      }
   }
   submitReceipt(){
      if (this.state.base && this.state.topping && this.state.cut) {
         this.setState({
            receipt: `Your customized Pizza: \n
               Base: ${this.state.base}\n
               Topping: ${this.state.topping}\n
               Cut: ${this.state.cut}\n
               Additional Notes: ${this.state.comment}`
         })
      } else {
         this.setState({
            receipt: 'Please fill out all the required field!'
         })
      }
   }

   render() {
      return (
         <View>
            <Text>Please select a base: (required)</Text>
            <Picker selectedValue = {this.state.base} onValueChange = {this.updateBase}>
               <Picker.Item label = "Thin Crust" value = "Thin Crust" />
               <Picker.Item label = "Thick Crust" value = "Thick Crust" />
               <Picker.Item label = "Focaccia" value = "Focaccia" />
            </Picker>
            <Text>Please select the topping(s): (required)</Text>
               {toppings.map((toppingSelection, index) => (
                  <View key={index} style={{ flexDirection: 'row' }}>
                     <CheckBox value={this.state.topping.includes(toppingSelection)} onValueChange={() => this.updateToppingSelection(toppingSelection)} />
                     <Text style={{marginTop: 5}}>{toppingSelection}</Text>
                  </View>
               ))}
            <Text>How would you like it to be cut: (required)</Text>
            {cutOptions.map((option, index) => (
               <View key={index} style={{ flexDirection: 'row' }}>
                  <CheckBox value={this.state.cut == option} onValueChange={() => this.updateCutSelection(option)} />
                  <Text style={{marginTop: 5}}>{option}</Text>
               </View>
            ))}
            <Text>If you have any additional note, please write here:</Text>
               <TextInput style={{borderColor: 'gray', borderWidth: 1}} onChangeText={(text) => { this.setState({ comment: text})}}/>
            <Button
               title="Submit"
               onPress={this.submitReceipt}
            />
            <Text>{this.state.receipt}</Text>
         </View>
      )
   }
}
export default PizzaPicker;