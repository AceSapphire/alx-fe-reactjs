import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/add" style={styles.link}>Add Recipe</Link>
          <Link to="/favorites" style={styles.link}>Favorites</Link>
          <Link to="/recommendations" style={styles.link}>Recommendations</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    marginBottom: '20px',
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: 'blue',
    fontWeight: 'bold',
  },
};

export default App;
