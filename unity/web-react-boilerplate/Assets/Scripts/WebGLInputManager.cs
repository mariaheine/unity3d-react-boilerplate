using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WebGLInputManager : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

    public void LockWebGLInput()
    {
        #if !UNITY_EDITOR && UNITY_WEBGL
            WebGLInput.captureAllKeyboardInput = false;
        #endif
    }

    public void UnlockWebGLInput()
    {
        #if !UNITY_EDITOR && UNITY_WEBGL
            WebGLInput.captureAllKeyboardInput = true;
        #endif
    }
}
