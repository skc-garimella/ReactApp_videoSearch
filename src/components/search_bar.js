import React from 'react';


//every component should have a render() function.
class SearchBar extends React.Component {

  //this is how state is initialized in class based component.
  //Functional components do not have states.
  constructor(props){
    //super is used to call the parent's constructor function.
    super(props);

    this.state = {searchTerm : ' '};
  }


  render() {
    //when value is provided with this.state., it becomes a controlled component.
    //A controlled component's value is set by state. So, its value changes only if its state changes.
    //When the input is changed, it only triggers an event(onChange) and that updates the value of the input.
    return (
      <div>
        <input type="text" className="form-control" placeholder="Search for videos here"
        onChange={(event) => this.searchVideos(event.target.value) }
      
        />
      </div>
    );
  }

  searchVideos(value) {
    this.setState({ searchTerm: event.target.value });
    this.props.onSearchTermChange(value);
  }

}

export default SearchBar;
