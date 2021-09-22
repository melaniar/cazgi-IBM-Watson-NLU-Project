import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              Object.entries(this.props.emotions).map(function(mapentry) {
            return (
                <tr>
                <tr>{mapentry[0]}</tr>
                <tr>{mapentry[1]}</tr>    
                </tr>
            )
            })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;