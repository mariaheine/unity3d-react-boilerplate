using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CookieEaten : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

    void OnTriggerEnter(Collider col)
    {
        Debug.Log(col.gameObject);
        Destroy(gameObject);
    }
}
