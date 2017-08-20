// React
import React, { Component } from 'react';

// Module CSS
import './app.css';

// Assets
import AssetRare from '../../assets/smilefjes.gif';
import AssetArtDirector from '../../assets/art_direction.mp4';
import AssetViktige from '../../assets/havplast.gif';
import AssetMorsomme from '../../assets/smilefjes.gif';
import AssetFarlege from '../../assets/farlege.gif';
import AssetJohanne from '../../assets/johanne.mp4';
import AssetHandywoman from '../../assets/handywoman.mp4';

// Components
import Asset from '../asset/asset';
import Link from '../link/link';

class App extends Component {
  constructor(props) {
    super(props);

    this.setAsset = this.setAsset.bind(this);
    this.returnAsset = this.returnAsset.bind(this);
  };

  setAsset(name) {
    this.setState({asset: name});
  }

  returnAsset() {
    return this.state.asset;
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    //
    return (
      <section className="app">
        <section className="content">
          <section className="content-inner">
            <Asset href={AssetArtDirector} target="artdirector" movie={true} />
            <Asset href={AssetRare} target="rare" />
            <Asset href={AssetViktige} target="viktige" />
            <Asset href={AssetMorsomme} target="morsomme" />
            <Asset href={AssetFarlege} target="farlege" />
            <Asset href={AssetJohanne} target="johanne" movie={true} />
            <Asset href={AssetHandywoman} target="handywoman" movie={true} />
            <p>
              <span className="hide"><span className="indent">Eg</span> heiter <Link text="Johanne Nyborg" href="/" target="johanne" /> og er </span><Link text="art director" href="/" target="artdirector" /><span className="hide">, <a href="http://instagram.com/johanne_nyborg" className="external">fotograf</a> og <Link text="handywoman" href="/" target="handywoman" />. Eg lagar <Link text="rare" href="/" target="rare" />, <Link text="viktige" href="/" target="viktige" />, <Link text="morsomme" href="/" target="morsomme" /> og (litt) <Link text="farlege" href="/" target="farlege" /> ting for blandt anna <a href="https://kolonial.no/k/121-matbutikken-som-ogsa-er-et-lekeland/" className="external anchor-farlege">Kolonial.no</a>, <a href="/" className="external anchor-viktige">Finn.no</a> og meg sjølv.</span>
            </p>
            <p>
              <span className="hide"><span className="indent">Ring</span> meg på <a href="tel:+4747898275" className="external">(0047) 478 98 275</a> eller mail meg på <a href="mailto:johannenyborg@gmail.com" className="external">johannenyborg@gmail.com</a>.</span>
            </p>
          </section>
        </section>
      </section>
    );
  };
}

export default App;
