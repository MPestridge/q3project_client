import React from 'react';
//import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const ProfileForm = React.createClass({

  getInitialState(){
    return ({
      value: ''
    });
  },

  handleChange(event, index, value){
    console.log(this.state);
    this.setState({value});
  },


  render: function(){

    console.log(this.state);
    return(
      <div className="profileContainer">
        <form>
          <h3>Contact Information</h3>

          <div className="row">
            <div className="col-md-5">
              <TextField type="text"
                id="firstname" floatingLabelText="First Name"/>
            </div>
            <div className="col-sm-offset-2 col-md-5">
              <TextField type="text" floatingLabelText="Last Name"/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
              <TextField type="text" floatingLabelText="Phone Number"/>
            </div>
            <div className="col-sm-offset-2 col-md-5">
              <TextField type="text" floatingLabelText="Email Address"/>
            </div>
          </div>
          <h3>Your Location</h3>
            <div className="row">
              <div className="col-md-5">
                <TextField type="text" floatingLabelText="City"/>
              </div>
              <div className="col-sm-offset-2 col-md-5">
                <TextField type="text" floatingLabelText="State"/>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <TextField type="text" floatingLabelText="Zip"/>
                </div>
              </div>
            </div>
          <h3>About</h3>
          <label>Select a Skill: </label>
          <br></br>
            <SelectField
            floatingLabelText="Skill"
            value={this.state.value}
            onChange={this.handleChange}
            >
              <MenuItem value={'painting'} primaryText="Painting" />
              <MenuItem value={'drawing'} primaryText="Drawing" />
              <MenuItem value={'sculpting'} primaryText="Sculpting" />
              <MenuItem value={'none'} primaryText="None" />
            </SelectField>
            <br></br>
            <TextField type="text" floatingLabelText="Profile URL"/>
            <TextField type="text" floatingLabelText="Personal Website"/>
            <TextField type="text" floatingLabelText="Bio"/>

            <RaisedButton type="submit" label="Submit"/>
        </form>
      </div>
    );
  }
});

export default ProfileForm;
