import React, {Component} from "react";

class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const{data} = this.props;
        const body = this.state.isOpen && <section>{data.text}</section>;
        return (
            <div className="Article">
                <h3>{data.title}
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'Закрыть' : 'Открыть'}
                </button>
                </h3>
                {body}
                <h4>
                    Дата создания: {(new Date(data.date)).toDateString()}
                </h4>
            </div>
        )
    }

    handleClick = () => {
        console.log('clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
export default Article;