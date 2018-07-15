using UnityEngine;
using System.Runtime.InteropServices;

public class CookieEaten : MonoBehaviour {

    [DllImport("__Internal")]
    private static extern void CookieEatenEvent();

    void OnTriggerEnter(Collider col)
    {

        #if !UNITY_EDITOR && UNITY_WEBGL
            CookieEatenEvent();
        #endif
        Destroy(gameObject);
    }
}
