using UnityEngine;

public class WebGLInputManager : MonoBehaviour 
{
    public void LockWebGLInput()
    {
        // -------------
        
        #if !UNITY_EDITOR && UNITY_WEBGL
            WebGLInput.captureAllKeyboardInput = false;
        #endif
        
        // -------------
    }

    public void UnlockWebGLInput()
    {
        // -------------
        
        #if !UNITY_EDITOR && UNITY_WEBGL
            WebGLInput.captureAllKeyboardInput = true;
        #endif
        
        // -------------
    }
}
