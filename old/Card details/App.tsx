import './App.css';

const customers=[
  {id:'1',
    avatar:'/images/img-1.jpg',
    customerName:'Joker',
    description:'The Joker is a supervillain appearing in American comic books published by DC Comics. Created by Bill Finger, Bob Kane, and Jerry Robinson, the character first appeared in the debut issue of the comic book Batman on April 25, 1940.',
    userProfile:'https://www.google.com/search?client=firefox-b-d&sca_esv=2696dd68aa1c6147&sca_upv=1&cs=1&sxsrf=ADLYWIKqen0Yh0S0kwy6m1n7fAdMfMWg6Q:1719483513977&q=Joker+(character)&stick=H4sIAAAAAAAAAG2TsY7UMBCGWRRQyIEOJJoTzYoKqsR24rU7pBOHoKC6hsratS_JJnHOiSMnuyUFEoLqGgo6noCCilfgDShBNPsIJyHBIeE5JMpP_uef8T92iO7P6Pns3tFaDuvTdtnMD8tlv5TDSW_n8fxo3ejzq6F4_Pz46fEL8TGY7YIoCmMdJ2QYGg9qy7pdsBfduABEsSqBpqzAXphXLfOAVFZ4MNRJX4QnxYinrDSCe2Hh8sRD2Y4WzPEm8UWEGZ16krwbNrvgZhT9GdeudM_9Iae5WnlibrIr6CYGOCKSVr9d9qNbcREjVPJkYVvZeV-WVKJwMA9awf2KsbkMtfaAM2V8C-o2o4YcFOXS26e1I9x5zPiopfYoE-RyEON27NIc1lBqZ4EsvpQvJnoUUJiJ1rp_fAoEEdB0McFmREXgInmtFzAdZqw2EJY0mWYthmeCh9RCbUG30CQ1qZpgAlMnVkFCou4b2B0paQueBlWglI3RoCRc5hRom3Tjh2t3np3WJ_38gfz76h9-vX5w5c2Pt-SR-_bz_d6TV-bdp-6l_fz99v6X12fh3f99lLMwuPgovwBhPb-TTAMAAA&sa=X&ved=2ahUKEwiO066gx_uGAxVw7zgGHS95BhAQ7fAIegUIABCBBg'
  },
  {id:'2',
    avatar:'/images/img-2.jpg',
    customerName:'Batman',
    description:'Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.',
    userProfile:'https://www.google.com/search?client=firefox-b-d&sca_esv=2696dd68aa1c6147&sca_upv=1&cs=1&sxsrf=ADLYWIKqen0Yh0S0kwy6m1n7fAdMfMWg6Q:1719483513977&q=Batman&stick=H4sIAAAAAAAAAG2TsW7VMBSGuShUIQWVgQWxXPECie3EN95QUYu6MHVhsnJtktwkNs515OTekQGpgqkLAxtP0IGpr9A3YASx3EeohARl8CkS4yf_5z_H_7FD9GyWXc-eHq_EsHqri27-oi7WhRjerO08nh-vOnV9N-RHr05PTl_zi2C2C6IojFWckGHoPMht3u-C_ej-DSCKZQ00ZRX2wrLRuQcks8qDoU74IjzJnHjKasOZF1auTDzUerRgjjeJLyK5UaknwfphswseRNHfce1SrZk_ZLSUS0-5m-wSuvEBjoigzR-Xg-hhXMUI1SxZWC1675snDa8czIOWcL9q7G5DqzzgTBrfgrrNqCAHSZnw9mnrCHMeMzYqoTyKBLkSxFiPfVrCGmrlLJDFt_LFRI0cCjOurfvHp0IQAU0XE2yGNwQuUrZqAdPhPG8NhCVMpnKN4ZngIbVQW9EtNElNKieYwLSJlZAQb9cd7I7UVIOnQQ0oRWcUKAkTJQXaJv345d7eYTGoQn_be3Lnw8-P5Ln7_uvz_sv35tPX_p29_PHo4OrsPHz8v99xHgY3v-M3-C1sXkEDAAA&sa=X&ved=2ahUKEwiO066gx_uGAxVw7zgGHS95BhAQ7fAIegUIABDxBQ'
  },
  {id:'3',
    avatar:'/images/img-3.png',
    customerName:'Ellen Ripley',
    description:'Ellen Louise Ripley is a fictional character and the original protagonist of the Alien film series, played by American actress Sigourney Weaver. Considered one of the greatest characters in science fiction film history, the character earned Weaver worldwide recognition, and remains her most famous role to date.',
    userProfile:'https://www.google.com/search?client=firefox-b-d&sca_esv=2696dd68aa1c6147&sca_upv=1&cs=1&sxsrf=ADLYWIKqen0Yh0S0kwy6m1n7fAdMfMWg6Q:1719483513977&q=Ellen+Ripley&stick=H4sIAAAAAAAAAG2TMW_UMBTHORRQSIvKwIJYTnyBxHbiszekqkUsDKgLU3RnX5JL7OCcIyd3I0Olqp26MLDxCTp04ivwDRhBLPcRKiFBGfyKxPiT_-__nv_PDtGLyexm8vx4JfrV-3aupofVfD0X_XJtp_H0eKX0zf0wP3pz8vrkXX4VTHZBFIWxjhPS98qD3LJuF-xFj24BUSwroDErsRcWdcs8IJmVHgx1whfhUTLiKatMzr2wdEXioWoHC-Z4k_giwoxOPQne9ZtdsB9Ff8e1C73m_pDTQi48MTfaBXTLezgigtZ_XA6ix3EZI1TxZGZb0XlfltR56WAetID7lYO6C432gDNpfAvqNoOGHCTlwtunjSPcecz4oIX2KBLkChDjdujSAtZQaWeBLL6TLyZ6yKEwy1vr_vEpEURA09kIm8lrAhcpGj2D6TBjjYGwhMk0azE8E9ynFmpLuoUmqUnlCBOYJrESEsqbtYLdkYq24GlQDUqhjAYl4aKgQNukGz4_2D9SatlO366MWm6-PXx27_znBXnpvv_6tPfq1Hy87j7YLz-eHHw9uwyf_u-PXIbB7R_5DSyBGKZHAwAA&sa=X&ved=2ahUKEwiO066gx_uGAxVw7zgGHS95BhAQ7fAIegUIABCRBg'
  },
  {id:'4',
    avatar:'/images/img-4.jpg',
    customerName:'Gandalf',
    description:'Gandalf is a protagonist in J. R. R. Tolkien\'s novels The Hobbit and The Lord of the Rings. He is a wizard, one of the Istari order, and the leader of the Fellowship of the Ring. Tolkien took the name "Gandalf" from the Old Norse "Catalogue of Dwarves" in the Völuspá.',
    userProfile:'https://www.google.com/search?client=firefox-b-d&sca_esv=2696dd68aa1c6147&sca_upv=1&cs=1&sxsrf=ADLYWIKqen0Yh0S0kwy6m1n7fAdMfMWg6Q:1719483513977&q=Gandalf&stick=H4sIAAAAAAAAAG2TsW7VMBSGuShASEFlYEEsV7xAYjvxtbdKqK1YOnVhsnJtktwkDs515OTekQGpgqkLAxtP0KFTX4E3YASx3EeohARl8CkS4yf_5z_H_7FD9GKGrmfPj1ZyWL3t8nb-ssrXuRzerO08nh-tWn19NxSHJ6evTl-Li2C2C6IojHWckGFoPagt63fBXvTwBhDFqgKashJ7YVF3zANSWenBUCd9EZ4UI56yygjuhaUrEg9VN1owx5vEFxFmdOpJ8n7Y7IJHUfR3XLvUa-4POS3U0hNzk11CNzHAEZG0_uOyHz2OyxihiicL28ne-7KkFqWDedAS7leO7W1otAecKeNbULcZNeSgKJfePm0c4c5jxkcttUeZIFeAGHdjnxawhko7C2TxrXwx0aOAwkx01v3jUyKIgKaLCTYjagIXKRq9gOkwY42BsKTJNOswPBM8pBZqS7qFJqlJ1QQTmCaxChISzbqF3ZGKduBpUA1K2RoNSsJlQYG2ST9-uffgOO9U3hbf7j-78-HnR3Lgvv_6vHf83ny67N_Zqx9P9r-enYdP__c9zsPg5nv8BmeOiZ9CAwAA&sa=X&ved=2ahUKEwiO066gx_uGAxVw7zgGHS95BhAQ7fAIegUIABCoBQ'
  },
  {id:'5',
    avatar:'/images/img-5.png',
    customerName:'Captain Jack Sparrow',
    description:'Captain Jack Sparrow is a fictional character and the main protagonist of the Pirates of the Caribbean film series and franchise. An early iteration of Sparrow was created by screenwriters Ted Elliott and Terry Rossio, but the final version of the character was created by actor Johnny Depp, who also portrayed him.',
    userProfile:'https://www.google.com/search?client=firefox-b-d&sca_esv=2696dd68aa1c6147&sca_upv=1&cs=1&sxsrf=ADLYWIKqen0Yh0S0kwy6m1n7fAdMfMWg6Q:1719483513977&q=Captain+Jack+Sparrow&stick=H4sIAAAAAAAAAG2TsW7VMBSGuSigkILK0AWxRLxAEjvxdTakiiIYutCFycp1SHKTOHXiyMm9IwMSgqkLA1ufoEMnXoE3YASx3EeohARlOKdIjJ_8n_8c_8d2oycLerV4fLSW4_q0y1r_sMqGTI5vBuMH_tG6VVe3XfHs-OTFyWtx4Sx2jue5gQpCOo4tQL7l_c7Z8-5dQ8RIXiHNSUlAWNQdB4jypATQzEooInPOKVBSaZGCsLRFCFB1k0FzsgmhiHKtYiCZ9uNm59z3vL_jmpUaUjhMWZGvgLidzQq7iRGPqGT1H5d970FQBlFUpeHSdLIHXx7WorQ4T7TC-5VTexMaBUCSXEMLZjeTwhxylkqwjxtLUwuYpJOSClCGkS1QTLqpjwtcQ6WsQTLkRr6EqklgYSI6Y__xKSOMgMXLGTcjaooXKRq1xOkI543GsKROFO8IPhMyxgZrS7bFJrGO8xkn0E1ockxINEOLu6MV69BTRzUqZasVKmkqC4a0Dfvp_M7BYabHbN35LzPZ-K90Ngyn07e7j259-PmRPrXff33ee_5Of7rs35ovPx7uf31_5h7876-cuc71X_kNPfLL6k8DAAA&sa=X&ved=2ahUKEwiO066gx_uGAxVw7zgGHS95BhAQ7fAIegUIABDOBQ'
  },
]

function App() {
  return (
    <div className="container">
    <h1>Customer Data</h1>
    <hr />
    <div className="row">
    {
      customers.map((customer) =>(
          <div className="col-md-6 col-lg-3" key={customer.id}>
        <div className="card" onClick={()=>{
          console.log(customer)
        }}>
          <img src={customer.avatar} className="card-img-top" alt={customer.customerName} />
          <div className="card-body">
            <h5 className="card-title">{customer.customerName}</h5>
            <p className="card-text">{customer.description}</p>
            <a href={customer.userProfile} target='_blank' className="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>)
      )
    }
    </div>
    </div>
  );
}



export default App;
