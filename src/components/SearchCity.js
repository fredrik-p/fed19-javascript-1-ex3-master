import React from 'react';

class SearchCity extends React.Component {
	state = {
		city: '',
	}

	onChange = e => {
		this.setState({
			city: e.target.value,
		});
	}

	onSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.state.city);

		this.setState({
			city: '',
		})
	}

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.onSubmit}>
					<div className="input-group">
						<input type="text" className="form-control form-control-lg" id="city" onChange={this.onChange} value={this.state.city} />

						<div className="input-group-append">
							<button className="btn btn-secondary btn-lg"><span role="img" aria-label="Search">🔍</span></button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
