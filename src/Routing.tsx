import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import FlatList from './FlatList';
import ImageList from './ImageList';
import Login from './Login';
import NewFlatList from './NewFlatList';
import RandomList from './RandomList';
import Register from './Register';
import Todos from './Todos';
import UserProfile from './UserProfile';

const Routing = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/todos" component={Todos} />
				<Route path="/register_user" component={Register} />
				<Route path="/login_user" component={Login} />
				<Route path="/about_me" component={UserProfile} />
				<Route path="/gallery" component={ImageList} />
				<Route path="/randoms" component={RandomList} />
				<Route path="/flatlist" component={FlatList} />
				<Route path="/new_flatlist" component={NewFlatList} />
			</Switch>
		</Router>
	);
};

export default Routing;
