import React from 'react';

function Notifications() {
    return (
      <fieldset>
<legend> Notifications</legend>

    <label for="options">Select time to send nofitications</label>
    <select 
      name="options" id="options" 
      size="1" 
      tabindex="11"
      >
      <optgroup label="time">
          <option>8:00AM</option>
          <option>12:00PM</option>
          <option>2:00PM</option>
      </optgroup>
</select>

    <p> Do you want to get yogurt delivered to you every month?</p>
    
    <label for="yes">
      <input type="checkbox" name="boxes" id="box2" tabindex="6"  value="yes" />
      Yes </label>
    
    <label for="boxes3">
      <input type="checkbox" name="boxes" id="box3"  tabindex="7" value="Comp sci is enjoyable"  />
      No </label>
    </fieldset>
    );
}

export default Notifications;
