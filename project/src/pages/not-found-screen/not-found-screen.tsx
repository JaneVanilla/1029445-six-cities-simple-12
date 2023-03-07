import './not-found-screen.css';
import {Helmet} from 'react-helmet-async';
import {Link} from'react-router-dom';

export default function NotFoundScreen() {
  return (
    <section className="pageNotFound">
      <Helmet>
        <title>Six cities. Page was not found.</title>
      </Helmet>
      <h1 className="pageNotFound__title">404 Not Found</h1>
      <Link to='/' title='main page' className='pageNotFound__link'>Go to the main page</Link>
    </section>
  );
}
