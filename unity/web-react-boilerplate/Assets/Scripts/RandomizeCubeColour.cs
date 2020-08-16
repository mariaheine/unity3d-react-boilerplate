using UnityEngine;

public class RandomizeCubeColour : MonoBehaviour
{
    Material cubeMaterial;
    float emissionIntensity = 0.65f;

    void Awake()
    {
        // -------------
        
        cubeMaterial = GetComponent<Renderer>().material;
        
        // -------------
    }


#if UNITY_EDITOR
    void Update()
    {
        // -------------
        
        // Test color randomization with C key
        if (Input.GetKeyDown(KeyCode.C))
        {
            Randomize();
        }
        
        // -------------
    }
#endif

    public void Randomize()
    {
        // -------------
        
        Color randomColor = Random.ColorHSV(0f, 1f, 0.7f, 1f, 0.85f, 1f);
        cubeMaterial.color = randomColor;
        cubeMaterial.SetColor("_EmissionColor", randomColor * emissionIntensity);
        
        // -------------
    }
}
